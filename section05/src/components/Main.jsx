import "./Main.css";

// ! JSX 주의사항
// ? 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. => 값으로 평가 될 수 있는 식만 넣을 수 있다. -> 조건문, 반복문 사용불가
// ? 2. 숫자, 문자열, 배열 값만 정상적으로 렌더링 된다. => undefined, true, null 오류는 나오지 않지만 렌더링은 되지 않는다.
// ? 3. 모든 태그는 닫혀있어야 한다. img 태그도 셀프 클로징 해줘야 한다.
// ? 4. 최상위 태그는 반드시 하나여야만 한다. -> 최상위 태그로 마땅히 감싸야할 태그가 없다면 그냥 빈태그로만 표시하자 -> 녹는다.

function Main() {
  const user = {
    name: "이우빈",
    isLogin: true,
  };

  // if (user.isLogin) {
  //   return (
  //     <div style={{ backgroundColor: "red", borderBottom: "5px solid green" }}>
  //       로그아웃
  //     </div>
  //   );
  // } else {
  //   return <div>로그인</div>;
  // }

  return (
    <>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
}

export default Main;
