// 복습 7
function A(props){
    return<>
        <button onClick={()=>{
            alert("함수1111111111");
        }}>함수1(직접작성)</button>
        <hr></hr>
        {props.onFunc != null ?
        <button onClick={()=>{
            props.onFunc();
        }}>함수2(props로 받은 함수)</button> : null}
    </>
}
function B(props){
    return<>
        <div>
            <a href="/" id="HelloReact" onClick={(e)=>{
                e.preventDefault();
                alert(e.target.id)
            }}>태그</a>
        </div>
        <button onClick={()=>{
            props.onFunc(3, 5);
        }}>B 컴포넌트 버튼</button>
    </>
}
function App(){

    function test1(){
        alert("리액트 정말 좋다!");
    }
    function test2(x,y){
        alert(x+y);
    }
    return<>
        <A onFunc={()=>{
            alert("함수22222222")
        }}></A>
        <div style={{margin :"20px"}}>==============================</div>

        <A onFunc={test1}></A> {/* 함수에 괄호를 넣으면 안됨. */}

        <div style={{margin :"20px"}}>==============================</div>
        
        <B onFunc={test2}></B>
    </>
}
export default App;