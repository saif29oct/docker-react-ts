/**
 * Hook Rules
 * There are 3 rules for hooks:
 *      1. Hooks can only be called inside React function components.
 *      2. Hooks can only be called at the top level of a component.
 *      3. Hooks cannot be conditional
 * 
 * Note: Hooks will not work in React class components.
 * 
 * Unlike the setState method found in class components, useState does not automatically merge update objects.
 * 
 * You cannot call Hooks from regular JavaScript functions. Instead, you can call Hooks from React function components.
 * Hooks can also be called from custom Hooks.
 * Don’t call Hooks inside loops, conditions, or nested functions
 * You can't use a hook inside another hook
 * 
 * Store function with the useState Hook
 *    React offers a way to to lazily initialise a state hook, ensuring that it only happens once. You do this by passing an argument-less function to useState which returns the initial value.
 * 
 */

import React, {useState, useEffect} from "react";

export default function UseStateHook(){
    const [data, setData] = useState({hits: [
        {objectId: 1, url: "hi moklu", title: "its's title"}
      ]});
      
      const [exampleState, setExampleState] = useState(
        {masterField: {
              fieldOne: "a",
              fieldTwo: {
                 fieldTwoOne: "b",
                 fieldTwoTwo: "c"
                 }
              }
         });

         console.log("exapleState: ",exampleState);
      
      
      useEffect(()=>{
        const val = {objectId: 2, url: "hi moklu", title: "its's title"};
      
        // Using Callback Function
        // setData((prevState)=>({
        //   ...prevState,
        //   hits: [...prevState.hits, val]
        // }))
      
        setData(
          {...data, 
          hits: [
            ...data.hits, val
          ]}
        );
        
        setExampleState((prevState)=>(
          {
           ...prevState,
           masterField: {
             ...prevState.masterField,
             fieldTwo:{
              ...prevState.masterField.fieldTwo,
              fieldTwoOne: "habib",
             fieldTwoThree: "Rofiq"
             }
           }
          }
        ))
      console.log("effect: ",exampleState);
      },[])      
    return (
        <div className="App">
            {
                data.hits.map((item)=>(
                <li key={item.objectId}>
                    <a href={item.url}>{item.title}</a>
                </li>
                ))
            }
        </div>
    );
}