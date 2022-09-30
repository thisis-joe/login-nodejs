"use strict";

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
        body : JSON.stringify(req)
    })

}