"use strict";
const id = document.querySelector("#id"),
    psword=document.querySelector("#psword"),
    confirmPsword=document.querySelector("#confirm-psword"),
    registerBtn=document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
    const req={
        id : id.value,
        name : name.value,
        psword : psword.value,
        confirmPsword:confirmPsword.value,
    }
    console.log(req);
    fetch("/register",{
        method:"POST", //body로 데이터를 보낼거면 POST라는 http 메서드를 사용해야함
        headers:{
            "Content-Type":"application/json", //내가 보내는게 json임을 headers를 통해 알려야함
        }, 
        body : JSON.stringify(req),
    })
    .then((res)=> res.json())//fetch끝에 then : 서버에서 응답한 내용을 받아올수있음
    .then((res)=>{
        if(res.success){
            alert(res.msge);
            location.href="/login"; //루트로 이동
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error((new Error("회원가입 중 에러 발생")));
    })
    ; 
}