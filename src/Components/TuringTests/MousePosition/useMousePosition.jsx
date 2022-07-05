import React, { useEffect, useState } from 'react'

function useMousePosition() {
    const [pos, setPos] = useState({})
    useEffect(()=>{
        const mousePositon = e =>{
            setPos({x: e.clientX, y: e.clientY});
        }
        window.addEventListener('mousemove', mousePositon)
        return ()=> window.removeEventListener('mousemove', mousePositon);  // Clean Up
    },[])
  return (pos)
}

export default useMousePosition