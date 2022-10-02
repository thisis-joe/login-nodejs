"use strict"; //ECMA문법을 준수하겠다고 표시

//index.js파일 : 라우팅 분리. home.ctrl에서 라우팅을 다 처리하지 않는다.
//home.ctrl 파일 가져와서 이어서 쓰는 느낌임.

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// router.get("/", (req, res) => {
// //res.send(``);
// res.render("home/index"); //render를 통해서 다른파일에있는거랑 연동함
// }); //이게 없으면 로컬3000 화면에는 루트를 찾을수 없다는 의미로 Cannot GET / 만 뜨게 된다.
// //브라우저에서 루트로 요청을 받으면 뭘 하겠다는 의미는 두번째 파라미터 콜백함수에서 정의해줌
// //브라우저에서 요청을 받고 응답을 하기 위해서. 
   // 요청이뭔지 알기위해서 req파라미터, 어떤 응답을 줄지res 파라미터. req에 따라 어떤 res를 줄지 내부적으로 설정가능 . if req == 어쩌고 저쩌고

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login); //프론트엔드가 전달한 로그인데이터를 받아서 로그인 기능을 처리할 부분

module.exports = router; //외부에서 router변수 사용할 수 있게 내보냄. app.js파일에서 써야하니까.
