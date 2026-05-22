// 복습1 - useRef 

import { useRef, useState } from "react";

function Test(){
    let varNum = 1;
    let [stateNum, setNum] = useState(1);
    let refNum = useRef(1);

    let nameRef = useRef("");

    return <>
        <div>varNum : {varNum}</div>
        <div>stateNum : {stateNum}</div>
        <div>refNum : {refNum.current}</div>
        <hr></hr>
        <button onClick={()=>{varNum += 1}}>varNum</button>
        <button onClick={()=>{setNum(stateNum+1)}}>stateNum</button>
        <button onClick={()=>{refNum.current += 1}}>refNum</button>

        <hr></hr>

        <input ref={nameRef}></input>
        <button onClick={()=>{
            console.log(nameRef.current.value);
            nameRef.current.focus();
        }}>inputRef</button>
    </>
}

export default Test;