import '../App.css';

function Head(props){
    return<>
        <div>
            <a id="1234" href="/" onClick={(e)=>{
                e.preventDefault();
                props.onOutputText();
            }}>{props.title}</a>
        </div>
    </>
}

function App(){
    return<>
        <Head title="헤더!" onOutputText={()=>{
            alert("첫 번째 Head!")
        }}></Head>
        <Head title="리액트 재밌따!" onOutputText={()=>{
            console.log("두 번째 Head!")
        }}></Head>
        <Head title="피곤..." onOutputText={()=>{
            let result = window.confirm("확인 or 취소"); // confirm 주의점 window 객체가 생략안됨.
            if(result){
                alert("확인");
            } else{
                alert("취소");
            }
        }}></Head>
    </>
}

export default App;