"use strict";

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
  }); //listen이라는 명령어로 서버를 띠움. 3000번 포트로 연다 & 콜백함수로 넘겨주는 두번째 파라미터는 리트마 표준을 따라 에러펑션을 적어둠.
   