import React, { useEffect } from 'react'

function CustomHookToCalculateWindowSize() {
  useEffect(()=>{
    window.addEventListener('resize', e=>(console.log(e.target.innerWidth)))
  },[])
  return (
    <div>customHookToCalculateWindowSize</div>
  )
}

export default CustomHookToCalculateWindowSize