// useRef 용도
// 1. 
// 2. input태그 컨트롤
// 3. useState와는 한 번에 처리하느냐 바로바로 처리하느냐의 차이점
import { useState } from "react";

function App(){
    let [name, setName] = useState("");
    return<>
        <div>{name}</div>
        <div>
            <input value={name} onChange={(e)=>{
                setName(e.target.value)
            }}></input>
        </div>
    </>
}
export default App;