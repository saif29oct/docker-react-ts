import React, { useState } from 'react'

const LoadingMCQ = () => {
  const [token] = useState(()=>{
      let token = window.localStorage.getItem("access-token");
      return token || "default#-token#"
  })
  return (
    <div>Token is {token}</div>
  )
}

export default LoadingMCQ