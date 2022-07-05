/**
 * Hook Rules
 * There are 3 rules for hooks:
 *      1. Hooks can only be called inside React function components.
 *      2. Hooks can only be called at the top level of a component.
 *      3. Hooks cannot be conditional
 * 
 * Note: Hooks will not work in React class components.
 * 
 * You cannot call Hooks from regular JavaScript functions. Instead, you can call Hooks from React function components.
 * Hooks can also be called from custom Hooks.
 * Don’t call Hooks inside loops, conditions, or nested functions
 * You can't use a hook inside another hook
 * 
 * 
 * useLayoutEffect:
 *  The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint. Prefer the standard useEffect when possible to avoid blocking visual updates.
 * 
 * Important Tip:
 *      --If you’re migrating code from a class component, note useLayoutEffect fires in the same phase as componentDidMount and componentDidUpdate. However, we recommend starting with useEffect first and only trying useLayoutEffect if that causes a problem. 
 *      --If you use server side rendering, keep in mind that neither useLayoutEffect nor useEffect can run until the JavaScript is downloaded. 
 *          This is why React warns when a server-rendered component contains useLayoutEffect. To fix this, either move that logic to useEffect (if it isn’t necessary for the first render), or delay showing that component until after the client renders (if the HTML looks broken until useLayoutEffect runs).
 *      --To exclude a component that needs layout effects from the server-rendered HTML, render it conditionally with showChild && <Child /> and defer showing it with useEffect(() => { setShowChild(true); }, []). This way, the UI doesn’t appear broken before hydration.
 * 
 * How useEffect Works:
 *  --step-1: user action 
 *  --step-2: react update the states
 *  --step-3: React handle the DOM mutation (Changes being made to the DOM tree)
 *  --step-4: useLayoutEffect function fired
 *  --step-5: browser paints this DOM changes to the browser's screen 
 */

import { useState, useRef, useEffect, useLayoutEffect } from "react";

export default function LayoutEffectSample(){
    const [show, setShow] = useState(0);
    const popup = useRef();
    const button = useRef();

    useEffect(()=>{
        if(popup.current == null || button.current == null) return
        const { button } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`
    },[show])

    return  (
        <>
            <button></button>
        </>
    )

}
