import { useState } from "react";

function Test(props){
    return<>
        <h3>{props.contents}</h3>
    
    </>
}

function App(){
    let [toggle, setToggle] = useState(true);
    return<>
        <div style={{color : toggle ? "blue" : "green" , fontWeight : "bold"}}>
            {toggle ? "자바" : "오라클"}
        </div>
        <button onClick={()=>{
            setToggle(!toggle);
            console.log(toggle);
        }}>클릭</button>
        <hr></hr>
        {toggle ?
            <Test contents="자바"></Test>:
            <Test contents="오라클"></Test>
        }
        
    </>
}
export default App;