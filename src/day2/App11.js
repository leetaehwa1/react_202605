// useRef 2

import { useEffect, useRef } from "react";

function App(){
    let idRef = useRef("");
    let pwdRef = useRef("");
    useEffect(()=>{
        idRef.current.focus();
    })
    return<>
        <div>
            <label>아이디 : <input id="userId" ref={idRef}></input></label>
        </div>
        <div>
            <label>패스워드 : <input type="password" ref={pwdRef}></input></label>
        </div>
        <button onClick={()=>{
            // 아이디 test, 비밀번호가 1234 면 '로그인 성공'출력
            // 아니면 '로그인 실패' 출력 후 아이디 input에 포커스
            console.log(idRef.current.value);
            if(idRef.current.value === "test" && pwdRef.current.value === "1234"){
                alert("로그인 성공");
            }else{
                alert("로그인 실패");
                idRef.current.focus();
                
            }
        }}>로그인</button>
    </>
}
export default App;