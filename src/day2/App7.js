import { useState } from "react"

function Sample(props){
    return<>
        <h3>{props.txt}</h3>
        
        <button onClick={e=>{
            e.preventDefault();
            if(props.type == "A"){
                alert(props.txt)
            } 
            else if(props.type == "B"){
                window.confirm(props.txt);
            }
            else{
                prompt(props.txt);
            }
            props.onPrint(props.txt);
        }}>클릭!</button>
    </>
}
function Sample2(props){
    return<>
        <h3>{props.txt}</h3>
        
        <button onClick={e=>{
            e.preventDefault();
            props.onPrint(props.txt, props.type);
        }}>클릭!</button>
    </>
}

function App(){
    let [txt, setTxt] = useState("");
    let [type, setType] = useState("");
    
    return<>
       
        {txt != "" ? <Sample txt={txt} type={type}
        onPrint={(txt)=>{
        }}></Sample> : null}

        <hr></hr>
        
        <hr></hr>
        <button onClick={()=>{setTxt("A컴포넌트 호출"); setType("A")}}>A</button>
      
        <button onClick={()=>{setTxt("B컴포넌트 호출"); setType("B")}}>B</button>
    
        <button onClick={()=>{setTxt("C컴포넌트 호출"); setType("C")}}>C</button>
        
        <button onClick={()=>{setTxt("");}}>클리어</button>
    </>
}

export default App;