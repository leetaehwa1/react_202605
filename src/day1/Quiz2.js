function App(){

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
            <button>유저 목록</button>
            <button>과목 목록</button>
            <button>초기화</button>
        </div>
        <hr></hr>
    </>
}
export default App;