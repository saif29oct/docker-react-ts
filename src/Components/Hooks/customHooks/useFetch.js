import { useState, useEffect }  from "react";

const useFetch = (url) => {
    const [data, setFetchData] = useState([]);

    // Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
    useEffect(()=>{
        (async() =>{
            const fetchPromiseData = await fetch(url);
            const fetchJsonData = await fetchPromiseData.json();
            setFetchData(fetchJsonData);
        })()
    },[url])

    return [data];
}

export default useFetch;