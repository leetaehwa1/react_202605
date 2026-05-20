import { useState } from 'react';
import '../App.css';

// useState 실습 1
function App(){ // 이 컴포넌트가 렌더링 된다.
    let varNum = 1;
    let [stateNum, setNum] = useState(1);
    // let num_ = useState(1)
    // let num = num_[0];
    // let setNum = num_[1];
    
    return<>
        {varNum}
        <button onClick={()=>{
            varNum++;
            console.log(varNum);
        }}>클릭</button>
        <hr></hr>
        {stateNum}
        <button onClick={()=>{
            setNum(stateNum+1);
        }}>클릭22</button>
    </>
}

export default App;