import { useState } from "react";

function App(){
    let [varNum, setNum] = useState(1);
    let decreaseNum = () =>{
        if(varNum >0){
            setNum(varNum-1);
        }
        
    }

    return<>
    {varNum > 4 ? "큰 수" : "작은 수"}
    <hr></hr>
    {varNum}
    <hr></hr>
    <button onClick={()=>{
        setNum(varNum+1);
    }}>증가</button>
    <button onClick={decreaseNum}>감소</button>
    </>
}

export default App;