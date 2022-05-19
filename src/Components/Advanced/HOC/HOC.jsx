/**
 * HOC
 *  -- A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
 *  -- Concretely, a higher-order component is a function that takes a component and returns a new component.
 */

import React, { useState, Component } from "react";
import Comments from "./comments";
import Albums from "./albums";

const HOC = (wrappedComponent, url)=>{
    return class extends Component{
        state = {
            data : [],
            term: ""
        }
        componentDidMount(){    // is invoked immediately after a component is mounted (inserted into the tree).
            (async ()=>{
                let data = await fetch(url);
                let jsonData = await data.json();
                jsonData = jsonData.slice(0,10);
                this.setState({...this.state, data:jsonData})   //  It will trigger an extra rendering, but it will happen before the browser updates the screen.
            })()
        }
        render(){
            let [term, data] = this.state;
            <>
                <h1>Filter Albums</h1>
                <input></input>
                <ul>
                    {
                        term.map((album)=>{
                            return <li key={album.id}>{album.title}</li>
                        })
                    }
                </ul>
            </>
        };
    }
}

export default HOC;