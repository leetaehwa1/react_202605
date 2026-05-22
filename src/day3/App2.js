// useEffect

import { useEffect, useState } from "react";

function App(){
    let [num1, setNum1] = useState(1);
    let [num2, setNum2] = useState(1);

    function list(){}

    // useEffect는 3가지 형태
    // 1. DependencyList가 없는 경우
    //   -> 렌더링 될 때마다 호출
    // useEffect(()=>{
    //     console.log("DependencyList 없는 useEffect!");
    // });

    // 2. DependencyList가 빈 값일 경우 
    //   -> 최초 로드되는 한번만 실행
    // useEffect(()=>{
    //     console.log("DependencyList 빈 값 useEffect!");
    // }, []);

    // 3. DependencyList에 값이 있는 경우(2개이상 넣는거 가능)
    //  -> 리스트 안에 있는 값이 변경되서 렌더링 될 때 실행
    useEffect(()=>{
        console.log("DependencyList에 값이 있는 경우 useEffect!");
    }, [num1]);

    return <>
        <div>num1 : {num1}</div>
        <div>num2 : {num2}</div>
        <hr></hr>
        <button onClick={()=>{setNum1(num1+1)}}>num1</button>
        <button onClick={()=>{setNum2(num2+1)}}>num2</button>
    </>
}

export default App;