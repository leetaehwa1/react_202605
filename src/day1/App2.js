import '../App.css';

function UserList(props){
    return<>
        <table>
            <tr>
                <td>아이디</td>
                <td>이름</td>
                <td>나이</td>
                <td>주소</td>
            </tr>
            {props.list.map(item =>{
                return <tr key={item.userId}>
                <td>{item.userId}</td> 
                <td>{item.userName}</td> 
                <td>{item.age}</td> 
                <td>{item.addr}</td> 
                </tr>
            })}
        </table>
    </>
    
}

function App(){
    let list = [
        {userId : 'user01', userName : '홍길동', age : 30, addr : '인천'},
        {userId : 'user02', userName : '김철수', age : 25, addr : '서울'},
        {userId : 'user03', userName : '박영희', age : 20, addr : '경기'}
    ]
    return<>
        <UserList list={list}></UserList>
    </>
}
export default App;