// 1. null 병합 연산자 ??
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 20;
let var3 = 30;

let var4 = var1 ?? var2;
console.log(var4); // 20

let var5 = var1 ?? var3;
console.log(var5); // 30

let var6 = var2 ?? var3; // 둘 다 null이나 undefined가 아니면 맨 처음 값을 반환한다.
console.log(var6); // var2 = 20

let userName = "이우빈";
let userNickName = "우피니";

let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = 70;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자 연산자 양쪽에 있는것을 항이라고 한다 그 항이 3개 있는게 삼항 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

const res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
