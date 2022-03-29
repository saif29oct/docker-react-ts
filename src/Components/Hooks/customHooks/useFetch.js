import { useState, useEffect }  from "react";

const useFetch = (url) => {
    const [data, setFetchData] = useState([]);

    // Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
    /* useEffect(async()=>{
        const $fetchPromiseData = await fetch(url);
        const $fetchData = await $fetchPromiseData.json();
        setFetchData($fetchData);
    },[url]); */

    // Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
    useEffect(()=>{
        (async() =>{
            const $fetchPromiseData = await fetch(url);
            const $fetchData = await $fetchPromiseData.json();
            setFetchData($fetchData);
        })()
    },[url])

    return [data];
}

export default useFetch;