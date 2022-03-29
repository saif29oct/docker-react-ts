/**
 * useContext:
 *  const value = useContext(MyContext);
 *  useContext is a hook that provides a way to pass data through the component tree without manually 
 *  passing props down through each nested component.
 * 
 *  Accepts a context object (the value returned from React.createContext) and returns the current context value 
 *  for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> 
 *  above the calling component in the tree.
 *  When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with 
 *  the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, 
 *  a rerender will still happen starting at the component itself using useContext.
 * 
 * Rendering:
 *  Don’t forget that the argument to useContext must be the context object itself:
 *      Correct: useContext(MyContext)
 *      Incorrect: useContext(MyContext.Consumer)
 *      Incorrect: useContext(MyContext.Provider)
 * A component calling useContext will always re-render when the context value changes.
 * If re-rendering the component is expensive, you can optimize it by using memoization.
 * 
 * useContext(MyContext) only lets you read the context and subscribe to its changes.
 */

import Child1 from "./child1";
import { createContext, useState } from "react"
export const counterProvider = createContext(0);
const ContextTest = ()=>{
    const [count, setCount] = useState(0);
    return (
        <counterProvider.Provider value={count}>
            <Child1 />
            <div>Parent Count: {count}</div>
            <button onClick={()=>{setCount(count+1)}}>Start</button>
        </counterProvider.Provider>
    )
}

export default ContextTest;