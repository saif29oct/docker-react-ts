import React, { useState } from 'react';

export const Counter: React.FC = ()=>{
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Add Count</button>
            <div role='countinfo'>Count is {count}</div>
        </>
    )
}