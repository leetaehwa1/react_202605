import '../App.css';

function SubjectArray(props){
    return<>
        <ul>
            {props.list.map(item =>{
                return <li>
                <a href="/" onClick={e =>{
                    e.preventDefault();
                    props.onSubInfo(item.subName, item.bookName);
                }}>{item.subName}</a>
            </li>
            })}
        </ul>
    </> 
}

function App(){
    let list = [
        {subId : 1, subName : "java", bookName : "재밌는 자바!", price: 20000},
        {subId : 2, subName : "html", bookName : "즐거운 HTML", price : 14000},
        {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
        {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}
    ]
    return <>
        <SubjectArray list={list} onSubInfo={(subName, bookName)=>{
            alert(subName + "책 이름은 " + bookName + " 입니다!");
        }}></SubjectArray>
    </>
}
export default App;
