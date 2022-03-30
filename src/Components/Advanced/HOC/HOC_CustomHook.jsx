import { useState, useEffect } from "react";

const useHocCustomHook =(props)=>{
    const [url, hookName, requiredItems] = props;
    const [data, setData] = useState([]);
    useEffect(()=>{
        (async ()=>{
            let fetchData = await fetch(url);
            fetchData = await fetchData.json();
            fetchData = fetchData.slice(0,requiredItems);
            setData(fetchData);
        })()
    },[])

    return (
        <>
            <h1>Filter {hookName}s</h1>
            <input></input>
            <ul>
                {
                    data.map((item)=>{
                        return <li key={item.id}>{hookName=="album"? item.title : item.body}</li>
                    })
                }
            </ul>
        </>
    )
}

export default useHocCustomHook