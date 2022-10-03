"use strict"

//변수앞에 #을 
class UserStorage{
    //사용자 계정 정보.
    static #users={ // 정적으로 선언했으므로 다른 파일에서 클래스이름만으로 접근가능. 클래스에 대한 인스턴스 없어도 됨
                    //그러나 변수를 바로 다 접근가능하게 하지 않음. 변수 앞에 #을 붙여서 은닉화.
        id:["우동균","네이버","카카오"],
        psword:["123","1234","12345"],
        name:["joseph","naver","kakao"],
    };

    //#변수에 접근하기 위해 사용해야하는 메서드를 만듦 20강 10분
    static getUsers(...fields){ //...변수명 과같은모양으로 함수인자를 선언하면, 함수를 사용할 때 여러개 인자들이 각각 배열형태로 함수의 인자로 동작하게 된다
        const users = this.#users;
        const newUsers= fields.reduce((newUsers,field)=>{ //id와 pw에 해당하는 정보만 넘겨주고 싶다.
            //reduce라는 배열변수를 사용한다. 이는 field변수로 들어온 필드명
            //reduce는 반복문이며, 두번째 파라미터(field)에대한 변수 가 순회된다?? reduce함수 알아보기.
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    //id를 인자로 받아서, id에 해당하는 (같은필드의) psword, name 값들 받아오는 메서드
    static getUserInfo(id){
        const users=this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //users의 키값들만 -> [id, psword, name]
        const userInfo = userKeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx]; //id에 해당하는 인덱스 위치의 값들 가져와서 저장
            return newUser;
        },{});
        return userInfo; //리턴 잘ㅇ해주자 제발...
    };
}

module.exports = UserStorage;