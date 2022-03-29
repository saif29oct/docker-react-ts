/**
 * useEffect(didUpdate):
 * Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component 
 * (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.
 * Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as 
 * an escape hatch from React’s purely functional world into the imperative world.
 * 
 * By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.
 * 
 * Timing of effects
 *      Unlike componentDidMount and componentDidUpdate, the function passed to useEffect fires after layout and paint, 
 *      during a deferred event. This makes it suitable for the many common side effects, like setting up subscriptions and event handlers, 
 *      because most types of work shouldn’t block the browser from updating the screen.
 * 
 * Note: 
 *  While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model, 
 *  there are usually better solutions to avoid re-running effects too often.
 * 
 * Note: 
 *      Although useEffect is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. 
 *      React will always flush a previous render’s effects before starting a new update.
 * 
 * How useEffect Works:
 *  --step-1: user action 
 *  --step-2: react update the states
 *  --step-3: React handle the DOM mutation
 *  --step-4: browser paints this DOM changes to the browser's screen 
 *  --step-5: Only after the browser has painted the DOM change(s) is the useEffect function fired
 * But the useLayoutEffect fires after step-3 synchronously
 */