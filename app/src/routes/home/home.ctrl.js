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

const output = {
  home : (req, res) => {
    //res.send(``); // @@@@@@이거 왜 적어놔가지고 에러 뜨냐 ㅅㅂ???
    res.render("home/index"); //render를 통해서 다른파일에있는거랑 연동함
  },
  login : (req, res) => {
    res.render("home/login");
  },
}

const users={ //사용자 계정 정보
  id:["우동균","네이버","카카오"],
  psword:["123","1234","12345"],
}

const process ={
  login:(req,res)=>{
    const id = req.body.id, 
      psword = req.body.psword;
    
    if(users.id.includes(id)){
      const idx=users.id.indexOf(id);
      if(users.psword[idx]===psword){
        return res.json({
          success:true, //res니까 프론트로 응답을 보내주는 것임
          msg:"로그인 성공",
      });
      }
    }
    else{
        return res.json({ //위에 if에서 return으로 나와버리기 때문에 else안써도됨
        success:false,
        msg:"로그인에 실패하셨습니다.",
        })
    }
  },
} 


module.exports={
    output,process,
};



//오브젝트 설명. : 오브젝트는 원래 키 - 값으로 구성된다. 그런데 value가 key랑 같으면 key 하나만 적어도 key : key 로 인식한다.
//원래모양
//{key:value}
//즉 원래 위에 적어놓은 거는
// { 
// hello:hello, 
// login:login,
// }

