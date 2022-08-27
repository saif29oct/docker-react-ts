import React, {useState, useEffect} from "react";

export type ListType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}



const Photos = () => {
    const [list, setList] = useState<ListType[] | null>(null);
    useEffect(() => {
      let controller: AbortController | null = new AbortController();
        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
              signal: controller.signal
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setList(jsonResponse);
            controller = null;
        })();
        return () => controller?.abort();
      }, []);
    return (
        <div>
          {list === null ? 'Fetching Photo Titles...' : ''}
          {list?.map((photo) => <div>{photo.title}</div>)}
        </div>
      );
}

export default Photos;

//  Abort SetTimeOut Function
// useEffect(() => {
//   let timerId = setTimeout(() => {
//     setValue('New value');
//     timerId = null;
//   }, 3000);
//   return () => clearTimeout(timerId);
// }, []);