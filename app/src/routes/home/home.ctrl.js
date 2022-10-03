"use strict"; //ECMA문법을 준수하겠다고 표시
//ctrl 부분을 또 따로 뺀다.  
// 왜자꾸 빼냐?? 기능별로 구분하려고
// ctrl(컨트롤러)란?????
// router.get("/login", (req, res) => {
//  res.render("home/login");
// })        ===>>>> 여기서 요청(req)에 대한 응답부분(res) : 그니까 send, render하던 부분.
//    (req, res) => {
//      res.render("home/login");
//     })    ===>>>> 이부분은 콜백함수라고 했다. 콜백함수를 썼던 이유는 이전으로 되감아서 컨트롤러 기능을 갖게 해줄 수 있었기 때문.

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");
const output = {
  home : (req, res) => {
    //res.send(``); // @@@@@@이거 왜 적어놔가지고 에러 뜨냐 ㅅㅂ???
    res.render("home/index"); //render를 통해서 다른파일에있는거랑 연동함
  },
  login : (req, res) => {
    res.render("home/login");
  },
};

const process ={
  login:(req,res)=>{
    const user = new User(req.body); 
    const response = user.login();
    return res.json(response);
    // const user = new User(req.body);
    // const response = user.login(); //User의 객체인 user에서 함수를 호출하고 있다
    // console.log(response);
    // return res.json(response);
    // const id=req.body.id,
    //   psword=req.body.psword;
    // console.log(UserStorage.getUsers("id","psword","name"))
    // const users = UserStorage.getUsers("id","psword");

    //////
    // const response={};
    // if(users.id.includes(id)){
    //   const idx=users.id.indexOf(id);
    //   if(users.psword[idx]===psword){
    //     response.success=true;
    //     return res.json(response);
    //   }
    // }
    // response.success=false;
    // response.msg="로그인에실패했습니다";
    // return res.json(response);
   
  },
}; 

module.exports={
    output,process,
};


//-----------
//[[ 오브젝트 설명. ]] 
// :오브젝트는 원래 키 - 값으로 구성된다. 그런데 value가 key랑 같으면 key 하나만 적어도 key : key 로 인식한다.
//원래모양 은 아래와 같다
//{key:value}
//즉 원래 위에 적어놓은 거는
// { 
// hello:hello, 
// login:login,
// }

//-----------
///user 받아올때 어떻게 받아올지 설명 ]]
//const user = new User(Req.body);  //User라는 클래스의 객체를 만들것이다. (클래스 정의는 다른파일에서.)
                                    //클래스는 인자로 "클라이언트로부터의 body"

//그런다음 user.login()함수를 호출해서 어떤 변수에 넣어주고, 그 변수에 저장된 값을 json형태로 다시 클라이언트에게 res해준다
//const response = user.login()
//return res.json(response)