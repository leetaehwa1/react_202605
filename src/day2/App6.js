import { useState } from "react"

function Sample(props){
    return<>
        <h3>{props.txt}</h3>
    </>
}

function App(){
    let [txt, setTxt] = useState("");

    return<>
        
        {txt != "" ? <Sample txt={txt}></Sample> : null}
        <hr></hr>
        <button onClick={()=>{setTxt("A컴포넌트 호출");}}>A</button>
      
        <button onClick={()=>{setTxt("B컴포넌트 호출");}}>B</button>
    
        <button onClick={()=>{setTxt("C컴포넌트 호출");}}>C</button>
        
        <button onClick={()=>{setTxt("");}}>클리어</button>
    </>
}

export default App;