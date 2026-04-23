const fruits = ['사과', '바나나', '오렌지'];
const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

const [c1,c2,c3] = fruits;
console.log(c1,c2,c3); // 사과 바나나 오렌지

const [year, month, day] = '2026-06-22'.split('-');
console.log(year, month, day); // 2026 06 22