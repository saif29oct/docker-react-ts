import { useState, useEffect }  from "react";

const useFetch = (url) => {
//    const token = 'fsq37ADeJa/mLzVoaySLfa4NQQ/5wPBC3ipIyn7MYKUE19Y=';
//    const options = {method: 'GET', headers: {Accept: 'application/json', Authorization: `Bearer ${token}`}};
   const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq37ADeJa/mLzVoaySLfa4NQQ/5wPBC3ipIyn7MYKUE19Y='
    }
  };
    const [data, setFetchData] = useState([]);

    // Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
    /* useEffect(async()=>{
        const $fetchPromiseData = await fetch(url);
        const $fetchData = await $fetchPromiseData.json();
        setFetchData($fetchData);
    },[url]); */

    // Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
    useEffect(()=>{
        let cancelled = false;
        (async() =>{
            if(!cancelled){
                const $fetchPromiseData = await fetch(url, options);
                const $fetchJsonData = await $fetchPromiseData.json();
                setFetchData($fetchJsonData);
            }
        })()
        return ()=>(cancelled = true)
    },[url])

    return [data];
}

export default useFetch;