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
 * Custom Hook:
 *      When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
 *      Custom Hooks start with "use". Example: useFetch.
 * 
 */
import useFetch from './useFetch';
const CustomHook = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");  //  JSONPlaceholder provides fetch fake data.
    return(
        <div>
            {
                data && data.map((item)=>{
                    return <p key={item.id}>{item.title}</p>;
                })
            }
        </div>
    );
}

export default CustomHook;

