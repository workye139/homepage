const users = [
 { name: "김개발", pay: 300 },
 { name: "박개발", pay: 200 },
 { name: "이디자인", pay: 350 },
 { name: "최기획", pay: 100 },
 { name: "오개발", pay: 300 }
];

console.log(users[3].pay); // 100


//모든 직원에 급여를 100만원씩 인상
const 인상급여 = users.map((user)=>{return{name: user.name, pay: user.pay+100}});
console.log(인상급여);

//인상급여 배열에서 급여가 400만원 이상인 사람만 골라서 고급개발자 배열 만들어라.
const 고급개발자 = 인상급여.filter ((급여)=>급여.pay >=400);
console.log(고급개발자)

//인상급여 배열에서 급여 합계, 평균 구하기
const payTotal = 인상급여.reduce( (sum, 사원)=> sum+사원.pay, 0);
let payAvg=payTotal/인상급여.length
console.log(payTotal) // 1750
console.log(payAvg) //350

//forEach()
인상급여.forEach((사원)=> console.log(사원.name, 사원.pay));


