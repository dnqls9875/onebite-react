// 1. if 조건문 / if문

let result = 9;

if (result >= 10) {
  console.log("10 이상입니다.");
} else if (result >= 5) {
  console.log("5 이상입니다.");
} else {
  console.log("10 이하입니다.");
}

// 2. switch 조건문 switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let days = "수";

switch (days) {
  case "월":
    {
      console.log("월요일");
    }
    break;
  case "화":
    {
      console.log("화요일");
    }
    break;
  case "수":
    {
      console.log("수요일");
    }
    break;
  case "목":
    {
      console.log("목요일");
    }
    break;
  case "금":
    {
      console.log("금요일");
    }
    break;
  case "토":
    {
      console.log("토요일");
    }
    break;
  case "일":
    {
      console.log("일요일");
    }
    break;

  default:
    break;
}
