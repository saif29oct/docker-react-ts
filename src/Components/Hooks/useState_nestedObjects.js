import React, {useState, useEff, useEffect} from "react";

export default function UseStateNestedObject(){
    const [data, setData] = useState({hits: [
        {objectId: 1, url: "hi moklu", title: "its's title"}
      ]});
      
      const [exampleState, setExampleState] = useState(
        {masterField: {
              fieldOne: "a",
              fieldTwo: {
                 fieldTwoOne: "b",
                 fieldTwoTwo: "c"
                 }
              }
         })
      
      
      useEffect(()=>{
        const val = {objectId: 2, url: "hi moklu", title: "its's title"};
      
        // Using Callback Function
        // setData((prevState)=>({
        //   ...prevState,
        //   hits: [...prevState.hits, val]
        // }))
      
        setData(
          {...data, 
          hits: [
            ...data.hits, val
          ]}
        );
        
        setExampleState((prevState)=>(
          {
           ...prevState,
           fieldTwo: {
             ...prevState.fieldTwo,
             fieldTwoOne: "habib",
             fieldTwoThree: "Rofiq"
           }
          }
        ))
      
      },[])      
    return (
        <div className="App">
      {
        data.hits.map((item)=>(
          <li key={item.objectId}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))
      }
    </div>
    );
}