import { Link } from "react-router-dom";

function Main(){
    console.log("test");
    return <>
        <h2>메인!!</h2>
        <hr></hr>
        <ul>
            <li><Link to="/login">로그인</Link></li>
            <li><Link to="/student/list">학생목록</Link></li>
            <li><Link to="/product/list">제품목록</Link></li>
        </ul>
    </>
}

export default Main;