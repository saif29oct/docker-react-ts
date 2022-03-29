import { useState, useEffect } from "react";
const Comments = ()=>{
    const [comments, setComments] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/comments";
    useEffect(() => {
        (async ()=>{
            let commentsData = await fetch(url);
            commentsData = await commentsData.json();
            commentsData = commentsData.slice(0,10);
            setComments(commentsData);
        })()
    }, []);
    return (
        <>
            <h1>Filter Comments</h1>
            <input></input>
            <ul>
                {
                    comments.map((comment)=>{
                        return <li key={comment.id}>{comment.body}</li>
                    })
                }
            </ul>
        </>
    );
}

export default Comments;