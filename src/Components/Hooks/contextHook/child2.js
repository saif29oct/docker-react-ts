import { useContext } from "react";
import { counterProvider } from "./parent";
const Child2 = ()=>{
    const count = useContext(counterProvider)
    return (
        <>
            <div>Child-2 Count: {count} </div>
        </>
    )
}

export default Child2;