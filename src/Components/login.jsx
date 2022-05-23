import React, { useState } from 'react'

function Login() {
    const [name, setName]=useState('');
    const [pass, setPass]=useState('');
  return (
    <>
        <form>
            <input onKeyUp={(e)=>(setName(e.target.value))} type="text" />
            <input onKeyUp={(e)=>(setPass(e.target.value))} type="password" />
            <button onClick={(e)=>{
                e.preventDefault();
                if(name === pass){
                  console.log("succeed") 
                }else{
                  console.log("failed");
                }
            }}>Submit</button>
        </form>
    </>
  )
}

export default Login