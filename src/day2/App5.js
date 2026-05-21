import { useState } from "react"

function A(){
    return<>
        <h3>A컴포넌트</h3>
    </>
}

function B(){
    return<>
        <h3>B컴포넌트</h3>
    </>
}

function C(){
    return<>
        <h3>C컴포넌트</h3>
    </>
}

function App(){
    let [btn, setBtn] = useState("clear");

    return<>
        {btn == "A" ? <A></A> : btn == "B" ? <B></B> : btn == "C" ? <C></C> : null}
        <hr></hr>
        <A></A>
            <button onClick={()=>{
                setBtn("A");
            }}>A컴포넌트 호출</button>
        
       <B></B> 
            <button onClick={()=>{
                setBtn("B");
            }}>B컴포넌트 호출</button>
        
        <C></C>
            <button onClick={() =>{
                setBtn("C");
            }}>C컴포넌트 호출</button>
        
            <button onClick={()=>{
                setBtn("claer");
            }}>클리어</button>
    </>
}

export default App;