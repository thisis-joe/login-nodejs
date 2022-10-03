"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){ //생성자
        this.body = body;
    }
    login(){
        const body =this.body;
        //const {id,psword} = UserStorage.getUsers("id","psword");
        const {id,psword} = UserStorage.getUserInfo(body.id);
        console.log(id,psword);
        if(id){ //id가 정보내에 있는 id에 있어야 함
            if(id===body.id && psword===body.psword){
                return {success:true, msge:"환영합니다."};
            }   
            return { success:false, msg:"비밀번호가 틀렸습니다."};
        }
        return{success:false, msg:"존재하지 않는 아이디 입니다."};
    }
}

module.exports = User; //모듈(파일)을 밖에서 사용가능하게 함. 습관처 