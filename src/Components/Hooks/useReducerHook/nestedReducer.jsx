import { useContext } from "react"
import { counterContext } from "./mainReducer"

const NestedReducer = () => {
    const counterState = useContext(counterContext)
    const dispatch = counterState.dispatch;
    return (
        <>
            <button onClick={()=>dispatch({type: "subtruct"})}>SUBTRUCT</button>
        </>
    )
}

export default NestedReducer;