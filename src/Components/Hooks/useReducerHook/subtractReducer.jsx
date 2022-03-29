import NestedReducer from "./nestedReducer";

const SubtractChildComponent = (props)=>{
//    const dispatch = props.dispatch;
    return (
        <>
            <NestedReducer />
             {/* <button onClick={()=>dispatch({type: "subtruct"})}>SUBTRUCT</button> */}
        </>
    )
}


export default SubtractChildComponent;