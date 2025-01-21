// 함수 표현문
function funcA() {
  console.log("a");
}

let varA = funcA;

varA();

// 함수 표현식 => 값으로 표현됨. -> 호이스팅의 대상이 되지 않음.
let varB = function funcB() {
  console.log("b");
};

varB();

// 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
