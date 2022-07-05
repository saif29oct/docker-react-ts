
// What happens to this code?

import { useState } from "react"

const TestComponent = () =>{
    const [token, setToken] = useState(()=>{
        let token = window.localStorage.getItem("access-token");
        return token || "default#-token#"
    });
    return <div>Token is {token}</div>
}

export default TestComponent;