/**
 * HOC
 *  -- A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
 *  -- Concretely, a higher-order component is a function that takes a component and returns a new component.
 */

import Albums from "./albums";
import Comments from "./comments";
import useHocCustomHook from "./HOC_CustomHook";

const HOC = ()=>{
    const [dta, setDta] = useHocCustomHook(["https://jsonplaceholder.typicode.com/comments", "comment", 10])
    console.log(dta);
    return (
        <>
            {/* <Comments /> */}
            {/* <HocCustomHook props={{url : "https://jsonplaceholder.typicode.com/comments", hookName : "comment", requiredItems : 20}} /> */}
            <Albums />
        </>
    )
}

export default HOC;