import { useState, useEffect } from "react";
const Albums = ()=>{
    const [albums, setAlbums] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/albums";
    useEffect(() => {
        (async ()=>{
            let albumsData = await fetch(url);
            albumsData = await albumsData.json();
            albumsData = albumsData.slice(0,10);
            setAlbums(albumsData);
        })()
    }, []);
    return (
        <>
            <h1>Filter Albums</h1>
            <input></input>
            <ul>
                {
                    albums.map((album)=>{
                        return <li key={album.id}>{album.title}</li>
                    })
                }
            </ul>
        </>
    );
}

export default Albums;