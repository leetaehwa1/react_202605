// 복습 1 - 컴포넌트

// const App = () => {
// 같은 코드
// }

function Text (props){
    return<>
        <div style={{color : props.color, fontWeight:props.fontWeight}}>
            <a href="/" onClick={e=>{
                e.preventDefault();
                props.onPrint();
                // alert("안녕~");
            }}>
                {props.txt}
            </a>
        </div> {/* 직접 스타일 주고 싶을 땐 꼭 ""를 줘야함 */}
    </>
}

function App(){
    function test(){
        alert("첫 번째 함수");
    }

    return<>
        <Text txt="크크크" onPrint={test}></Text>

        <Text txt="안녕하세요" color="blue" fontWeight="bold" onPrint={()=>{
            alert("첫 번째 함수");
        }}>
            </Text> {/* 안녕하세요 */}
        <Text txt="반갑습니다" color="orange" fontWeight="lighter" onPrint={()=>{
            window.confirm("확인 or 취소");
        }}></Text> {/* 안녕하세요 */}
        <Text txt="ㅋㅋㅋㅋㅋ" color="purple" onPrint={()=>{
            prompt("숫자 입력 : ");
        }}></Text> {/* 안녕하세요 */}
    </>
}

export default App;