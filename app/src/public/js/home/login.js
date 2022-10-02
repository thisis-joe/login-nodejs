"use strict";
//뭐하는파일? : 
const id = document.querySelector("#id"),
    psword=document.querySelector("#psword"),
    loginBtn=document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
    const req={
        id : id.value,
        psword : psword.value,
    }
    fetch("/login",{
        method:"POST", //body로 데이터를 보낼거면 POST라는 http 메서드를 사용해야함
        headers:{
            "Content-Type":"application/json", //내가 보내는게 json임을 headers를 통해 알려야함
        },
        body : JSON.stringify(req),
    })
    .then((res)=> res.json())//fetch끝에 then : 서버에서 응답한 내용을 받아올수있음
    .then((res)=>{
        if(res.success){
            location.href="/"; //루트로 이동
            alert(res.msg);
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error((new Error("로그인 중 에러 발생")));
    })
    ; //then한번 더 찍는 이유 : res.json반환값은 Promise이다. 이걸읽으려고,
}