/**
 *  useReducer
 * useReducer(<reducer>, <initialState>)
 * 
 * Note:
 *  React guarantees that dispatch function identity is stable and won’t change on re-renders. This is why it’s safe to omit 
 *  from the useEffect or useCallback dependency list.
 * 
 * Lazy initialization:
 *      You can also create the initial state lazily. To do this, you can pass an init function as the third argument. 
 *      The initial state will be set to init(initialArg).
 *      It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for 
 *      resetting the state later in response to an action:
 * 
 * Bailing out of a dispatch:
 *  If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or 
 *  firing effects. (React uses the Object.is comparison algorithm.)
 */

// Implementing a Counter with Reducer and Context hook 

import { useReducer, createContext } from "react"
import SubtractChildComponent from "./subtractReducer";

export const counterContext = createContext(0)

const SampleUseReducer = () => {
    const initialState = { count: 0, default: 5 };
    const countReducer = (state, action) => {
        const count = state.count
        switch(action.type){
            case "add": 
                return {...state, count: add(count)}
            case "subtruct":
                return {...state, count: sub(count)}
            default:
              return state
        }
    }

    let add = (count)=>{
        console.log(count)
        return count + 1;
    }

    const sub = (count) => {
        return count - 1;
    }

    const [state, dispatch] = useReducer(countReducer, initialState)
    return(
        <counterContext.Provider value={{state, dispatch}}>
            <div>{state.count}</div>
            <div>{state.default}</div>
            <button onClick={()=>dispatch({type: "add"})}>ADD</button>
            <SubtractChildComponent dispatch={dispatch}/>
            {/* <button onClick={()=>dispatch({type: "subtruct"})}>SUBTRUCT</button> */}
        </counterContext.Provider>
    )
}

 export default SampleUseReducer;



// Lazy Initialization

/*  function init(initialCount) {
    return {count: initialCount};
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'reset':
        return init(action.payload);
      default:
        throw new Error();
    }
  }
  
  function Counter({initialCount}) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
      <>
        Count: {state.count}
        <button
          onClick={() => dispatch({type: 'reset', payload: initialCount})}>
          Reset
        </button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
    );
  }
 */