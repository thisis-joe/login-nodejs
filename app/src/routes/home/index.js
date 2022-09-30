"use strict"; //ECMA문법을 준수하겠다고 표시

//index.js파일 존재 이유 : 라우팅 분리. app.get 코드 원래 app.js에서 다루었는데 여기로 빼옴.
//app.js파일에 있을때는 app.js로 했는데 관례적으로 router라는 변수를 쓴다.
//router변수는 이 파일에 없으니까 express동일하게 require해서 사용할 수 있게 하자

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// router.get("/", (req, res) => {
// //res.send(``);
// res.render("home/index"); //render를 통해서 다른파일에있는거랑 연동함
// }); //이게 없으면 로컬3000 화면에는 루트를 찾을수 없다는 의미로 Cannot GET / 만 뜨게 된다.
// //브라우저에서 루트로 요청을 받으면 뭘 하겠다는 의미는 두번째 파라미터 콜백함수에서 정의해줌
// //브라우저에서 요청을 받고 응답을 하기 위해서. 요청이뭔자 알기위해서 req파라미터, 어떤 응답을 줄지res 파라미터. req에 따라 어떤 res를 줄지 내부적으로 설정가능 . if req == 어쩌고 저쩌고

// 아무튼 그렇고 home.ctrl.js파일을 만들었으니까 아래처럼 쓸 수 있음. 

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router; //외부에서 router변수 사용할 수 있게 내보냄. app.js파일에서 써야하니까.
