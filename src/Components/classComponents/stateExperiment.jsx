import React, { Component } from 'react'

export class StateExperiment extends Component {
    state={
        count: 5
    }

  render() {
    return (
        <>
            <div>Count: {this.state.count} --- Increment: {this.props.increment}</div>
            <button onClick={()=>(this.setState({count: this.state.count + this.props.increment}))}>Click Me</button>
        </>
    )
  }
}

export default StateExperiment