//객체심화.js
const user= {
    name: "김개발",
    age: 20,
    email: "kim@naver.com",
    //함수
    introduce: function(){
        return `안녕하세요 저는 ${this.name}입니다. ${this.age}살입니다. 이메일은 ${this.email}입니다.`;
    },
   //this는 함수가 포함되어 있는 객체에 같이 들어 있는 속성을 가르킨다.
//함수2
    getAge(){
        return `저는 ${this.age}살입니다.`;
    },
    setAge(){
        this.age=this.age+1;
    },
};
console.log ( user.email);
console.log ( user.introduce());
console.log ( user.getAge());
user.setAge();
console.log ( user.getAge());



