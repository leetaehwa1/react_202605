import '../App.css';
import { useState } from "react";
function UserList(props){
    return<>
        {props.list.map(item=>{
            return <ul>
                <li key={item.userId}>
                    <a href='/' onClick={e =>{
                        e.preventDefault();
                        props.ageAlert(item.userName, item.age)
                    }}>
                        {item.userName}
                    </a>
                </li>
            </ul>
        })}
    </>
}

function SubjectList(props){
    return<>
        <table>
            <tr>
                <td>번호</td>
                <td>과목명</td>
                <td>책이름</td>
                <td>가격</td>
            </tr>
            {props.list.map(item =>{
                return <tr key={item.subId}>
                    <td>{item.subId}</td>
                    <td>{item.subName}</td>
                    <td>
                        <a href='/' onClick={e =>{
                            e.preventDefault();
                            props.priceAlert(item.bookName, item.price);
                        }}>
                            {item.bookName}
                        </a>
                    </td>
                    <td>{item.price}</td>
                </tr>
            })}
        </table>
            
    </>
}


function App(){
    let [toggle, setToggle] = useState("clear");
    
    let users = [
        {userId : 'user01', userName : '홍길동', age : 30, addr : '인천'},
        {userId : 'user02', userName : '김철수', age : 25, addr : '서울'},
        {userId : 'user03', userName : '박영희', age : 20, addr : '경기'}
    ]

    let subjects = [
        {subId : 1, subName : "java", bookName : "재밌는 자바!", price: 20000},
        {subId : 2, subName : "html", bookName : "즐거운 HTML", price : 14000},
        {subId : 3, subName : "oracle", bookName : "놀라운 오라클!", price : 26000},
        {subId : 4, subName : "python", bookName : "그냥 파이썬", price : 18000}
    ]
    return<>
        <div>
            <button onClick={()=>{
                setToggle("user");
            }}>유저 목록</button>
            <button onClick={()=>{
                setToggle("subject");
            }}>과목 목록</button>
            <button onClick={()=>{
                setToggle("clear");
            }}>초기화</button>
        </div>
        <hr></hr>
        {toggle == "user" ? <UserList list={users} ageAlert={(userName, age) =>{
            alert(userName + "님의 나이는 " + age + "입니다.")
        }}></UserList> : toggle == "subject" ? 
        <SubjectList list={subjects} priceAlert={(bookName, price) =>{
            alert(bookName + "의 가격은" + price +"원 입니다.")
        }}></SubjectList> : null}
    </>
}
export default App;