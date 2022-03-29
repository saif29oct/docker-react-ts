/**
 * useCallback:
 *      -- Returns a memorized callback.
 *      -- Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. 
 *      -- This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
 *      -- useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
 *  Note
 *     --The array of dependencies is not passed as arguments to the callback. Conceptually, though, that’s what they represent: every value referenced inside the callback should also appear in the dependencies array.
 */

import { useState, useCallback } from "react";
import List from "./List";

const UseCallbackHook = ()=>{
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    // without useCallback(fn, dependencies)
    /* const getItems = ()=>{
        return [number, number+1, number+2];
    } */

    // with useCallback(fn, dependencies)
    const getItems = useCallback(()=>{
        return [number, number+1, number+2];
    },[number])

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }


    return (
        <div style={theme}>
            <input 
                type="number" 
                value={number} 
                onChange={e=>{
                    setNumber(parseInt(e.target.value))
                }} 
            />
            <button onClick={()=>{setDark(!dark)}}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    )
}

export default UseCallbackHook;