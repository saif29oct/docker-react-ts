/**
    React.memo is a higher order component.
    If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.
    
    This method only exists as a performance optimization. Do not rely on it to “prevent” a render, as this can lead to bugs.
    Note:
        Unlike the shouldComponentUpdate() method on class components, the areEqual function returns true if the props are equal and false if the props are not equal. This is the inverse from shouldComponentUpdate.

*/
import React, { useState, memo } from 'react'

function ReactMemo() {
    const style1 = {
        background: 'green',
        height: 300,
        width: 300
    }

    const [text1, setText1] = useState(10);
    const [color, setColor] = useState('yellow');

    console.log("Component rendered: ", text1);

  return (
      <>
        <h2>ReactMemo</h2>
        <div style={style1}>{text1}</div>
        <button onClick={()=>setText1(text1+1)}>btn1</button>
        <button onClick={()=>(color === 'yellow' ? setColor("blue") : 'yellow')}>Change Color</button>
        <div>
            <SawchMemo color={color} />
            <SawchMemo color={color === "yellow" ? "blue" : "yellow"} />
        </div>
      </>
  )
}

const SawchMemo = memo(Swatch);

function Swatch({color}){
    const style2 = {
        background: color,
        height: 300,
        width: 300
    }

    const [text1, setText2] = useState(20);

    console.log("Swatch rendered: ", text1);
    
  return (
      <>
        <h2>ReactMemo Swatch Component</h2>
        <div style={style2}>{text1}</div>
        <button onClick={()=>setText2(text1+1)}>btn2</button>
      </>
  )
}

export default ReactMemo