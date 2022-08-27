import React, { useState, useEffect } from "react";

export const APIComponent: React.FC = ()=>{
    type TTodo = {
        userId?: number,
        id?: number,
        title: String,
        completed?: boolean
    }
    const [data, setData] = useState<TTodo>()

    useEffect (()=>{
        let isMounted = true;
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data=>{
            if(isMounted) setData(data)
        })
        return ()=> {isMounted = false}   // Clean Up function
    }, [])
    return (
        <div>
            {
                data && <div role='contentinfo'>To Do: {data.title}</div>
            }
        </div>
    )
}