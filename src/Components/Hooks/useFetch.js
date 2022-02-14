import { useState, useEffect }  from "react";

const useFetch = (url) => {
    const [data, setFetchData] = useState([]);
    useEffect(async()=>{
        const $fetchPromiseData = await fetch(url);
        const $fetchData = await $fetchPromiseData.json();
        setFetchData($fetchData);
    },[url]);

    return [data];
}

export default useFetch;