// 복습 2
function SubjectList(props){
    // let newList = props.list.map(item=>{
    //     return <li>{item.subName}</li>
    // })

    return<>
        <ol>
            {props.list.map(item =>{
                return <li key={item.subId}>
                        <a href="/" onClick={e=>{
                            e.preventDefault();
                            props.onPrint(item);
                        }}>
                            {item.subName}
                        </a>
                    </li>
            })}
        </ol>
        
    </>
}

function App(){
    let subjects = [
        {subId : 1, subName : "java", bookName : "재밌는 자바!", price: 20000},
        {subId : 2, subName : "html", bookName : "즐거운 HTML", price : 14000},
        {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
        {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}
    ]
    return<>
        <SubjectList list={subjects} onPrint={(item)=>{
            alert(item.subName + "과목의 책 이름은" + item.bookName + "입니다")
        }}></SubjectList>
        <SubjectList list={subjects} onPrint={(item)=>{
            alert(item.subName + "과목의 책 가격은" + item.price + "입니다")
        }}></SubjectList>
    </>
}
export default App;