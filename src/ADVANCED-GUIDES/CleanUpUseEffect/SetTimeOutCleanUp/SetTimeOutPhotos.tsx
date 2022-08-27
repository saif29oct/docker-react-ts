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
        let timerId = setTimeout(async() => {
          const response = await fetch('https://jsonplaceholder.typicode.com/photos');
          const jsonResponse = await response.json();
          setList(jsonResponse);
        }, 30000);
        return () => clearTimeout(timerId);
      }, []);
    return (
        <div>
          {list === null ? 'Fetching Photo Titles...' : ''}
          {list?.map((photo) => <div>{photo.title}</div>)}
        </div>
      );
}

export default Photos;
