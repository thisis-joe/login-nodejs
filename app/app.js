//메인 서버 파일
//터미널에서 node app.js 하면 app.js파일을 javascript로 읽어준다
//node.js의 v8엔진은 크롬브라우저에서도 사용되는 js컴파일러라고 보면됨.
//npm설치할때 --save 옵션을 꼭 주자. 나중에 package.json파일에서 관리하기 편해진다.

                                                        //##########################################
                                                        //############# http로 서버열기 ############### -> 한글도 깨지고 코드도 더러움.
                                                        //##########################################
                                                        // const http = require("http");
                                                        // const app = http.createServer((req, res) => {
                                                        //   console.log(req.url); //req중에 url이란게 있다. 이걸로 라우팅해줄거임 -> 결과 : 루트경로 이후 아무거나 적으면 localhost:3001/login/adsfafd 이렇게 적으면 콘솔에 login/adsfafd이렇게 콘솔에 찍힘
                                                        //   res.writeHead(200,{"Content-Type":"text/html; charset-utf-8"}); //한글 안깨지게 함
                                                        //     if (req.url==='/'){
                                                        //         res.end("여기는 루트입니다")//http에는 send가 없다
                                                        //     }else if(req.url === "/login"){
                                                        //         res.end("여기는 로그인 화면입니다")
                                                        //     }
                                                        // });

                                                        // app.listen(3001, () => {
                                                        //   console.log("http로 가동된 서버입니다.");
                                                        // });

//##########################################
//########### express로 서버열기 ##############
//##########################################

//##모듈
const express = require("express"); //require 명령어로 express모듈을 다운로드
const app = express(); //express실행시켜서 app이라는 변수안에 넣음

const PORT = 3000;

//##라우팅
const home = require("./src/routes/home"); //home폴더안의 index.js 파일 알아서 읽음

//##앱세팅 
//views를 사용함으로써 res.send(``) 안에 html코드를 안적고 여기서 관리 가능.
//views를 관리할 파일경로를 두번째 파라미터로.
//views 안에 저장될 html코드를 어떤 엔진으로 실행할건지도 정함. view엔진중에 ejs사용함. ejs는 html과 유사함
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/",home); // use는 미들웨어를 등록하는 메서드이다. 미들웨어 개념이 좀 어려운데 ,.. 일단 씀/ 

module.exports=app;