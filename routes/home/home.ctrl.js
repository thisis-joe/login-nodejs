"use strict"; //ECMA문법을 준수하겠다고 표시

//ctrl 부분을 또 따로 뺀다.  왜자꾸 빼냐?? 나중에 코드 길어지면 기능별로 구분 돼 있으면 좋을 거 같다
// ctrl(컨트롤러)이란?????
// router.get("/login", (req, res) => {
//  res.render("home/login");
// })        ===>>>> 여기서 요청(req)에 대한 응답부분(res) : 그니까 send, render하던 부분.

//    (req, res) => {
//      res.render("home/login");
//     })    ===>>>> 이부분은 콜백함수라고 했다. 콜백함수를 썼던 이유는 이전으로 되감아서 컨트롤러 기능을 갖게 해줄 수 있었기 때문.

// hello라는 컨트롤러 함수를 만들고, 외부에서 사용하는 방식
const hello = (req, res) => {
  res.send(``);
  res.render("home/index"); //render를 통해서 다른파일에있는거랑 연동함
};

const login = (req, res) => {
  res.render("home/login");ß
};

module.exports={
    hello,login,
};
//오브젝트 설명. : 오브젝트는 원래 키 - 값으로 구성된다. 그런데 value가 key랑 같으면 key 하나만 적어도 key : key 로 인식한다.
//원래모양
//{key:value}
//즉 원래 위에 적어놓은 거는
// { 
// hello:hello, 
// login:login,
// }

