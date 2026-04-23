//배열.js
let numbers= [10,5,40,25,1000,1]
let sortnum= numbers.sort();
console.log(sortnum);

sortnum = numbers.sort((a,b)=>a-b); // 10 - 5 = 5
console.log(sortnum);

let students = [
 { name: "김개발", score: 85, age: 20 },
 { name: "박멘토", score: 92, age: 22 },
 { name: "이디자인", score: 78, age: 19 },
 { name: "최기획", score: 96, age: 21 }
];
//점수 순서대로 내림차순 정렬 배열 담기
let scoreSort=students.sort((a,b)=> b.score-a.score);
console.log(scoreSort);
//나이 순서대로 오름차순 정렬 배열 담기
let ageSort=students.sort((a,b)=> a.age-b.age);
console.log(ageSort);
//이름 순서대로, 한글, 영어 문자 정렬 방법
let nameSort=students.sort((a,b)=> a.name.localeCompare(b.name));
console.log(nameSort);
let nameDesSort=students.sort((a,b)=> b.name.localeCompare(a.name));
console.log(nameDesSort);
