// 복습

import { useRef, useState } from "react";

function SubjectAdd(props){
    let subName = useRef("");
    let bookName =useRef("");
    let price = useRef("");

    return<>
        <div>
            <label>과목명 : <input ref={subName}></input></label>
        </div>
        <div>
            <label>책이름 : <input ref={bookName}></input></label>
        </div>
        <div>
            <label>가격 : <input ref={price}></input></label>
        </div>
        <div>
            <button onClick={()=>{
                let subject = 
                {
                    subId : props.list.length+1,
                    subName : subName.current.value,
                    bookName : bookName.current.value,
                    price : price.current.value
                };
                props.list.push(subject);
                props.setSubjects(props.list);
                console.log(props.list);
            }}>추가</button>
        </div>
    </>
}
function SubjectView(props){
    return<>
    <ul>
        {props.list.map(item=> {
            return <li key={item.subId}> {item.subName} : {item.bookName}</li>
        })}
    </ul>
    </>
}

function App(){
    let [subjects, setSubjects] = useState([
        {subId : 1, subName : "java", bookName : "재밌는 자바!", price: 20000},
        {subId : 2, subName : "html", bookName : "즐거운 HTML", price : 14000},
        {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
        {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}
    ])
    // 값을 넣을 땐 push, 꺼낼 땐 pop
    let [menu, setMenu] = useState("");
    
    return<>
        <button onClick={()=>{
            console.log(subjects)
            setMenu("ADD");
        }}>과목 추가</button>
        <button onClick={()=>{
            setMenu("VIEW");
            
        }}>확인</button>
        <hr></hr>
        {menu == "ADD" ? <SubjectAdd list={subjects} setSubjects={setSubjects}></SubjectAdd> : null}
        {menu == "VIEW" ? <SubjectView list={subjects}>

        </SubjectView> :null}
    </>
}
export default App;