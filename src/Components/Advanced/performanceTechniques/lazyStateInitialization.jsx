import React, { useState } from 'react'

function LazyStateInitialization() {
    const fn1 = ()=>{
        console.log("hi");
        return 0;
    }
    // const [count, setCount] = useState(fn1());   // It's Expensive
    const [count, setCount] = useState(()=>fn1());  // It's lazy Initialization
  return (
    <div>LazyStateInitialization
        <div>{
            console.log("count: ",count)
            }
        </div>
        <button onClick={()=>setCount(count+1)}>ADD</button>
    </div>
  )
}

export default LazyStateInitialization