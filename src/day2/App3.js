// 복습 3 - useState

import { useState } from "react";

// 자동 렌더링 함수 useState
function App(){
    let [varNum, setNum] = useState(1); // useState 인자값은 숫자와 set함수

    return<>
        <h3>{varNum}</h3>
        <button onClick={()=>{
            setNum(varNum+1);
            // console.log(varNum)
        }}>varNum 증가</button>
    </>
}
export default App;