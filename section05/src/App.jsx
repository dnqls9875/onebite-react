import { useState } from "react";
import "./App.css";

// App Components
function App() {
  // ! 새로운 state를 생성하고, 버튼을 통해 상태를 변경해주게 되면 내부적으로 state가 변경된다는걸 감지해서 이 컴포넌트를 다시 렌더링 (리렌더링) 해준다.
  // ! 함수 컴포넌트를 리렌더링 한다는 말은 => 컴포넌트의 역할을 하고 있는 App 함수를 다시 호출하고, 새롭게 반환한 값을 화면에 다시 렌더링한다.
  // ! 쉽게 말해 컴포넌트 state값이 바뀌면 return을 다시하면서 화면에 다시 그린다. 그때 변경된 state값도 화면에 함께 반영된다.

  // & 왜 리엑트에서는 굳이 state라는 변수를 만들어서 사용할까? let이나 const로 스크립트 변수 만들어서 사용해도 되는거 아닌가?
  // & 버튼을 클릭한다고 해서 리렌더링이 되지는 않는다. 리엑트에서는 state 값이 변경이 되어야만 리렌더링이 일어나기 때문에
  // & 자바스크립트 변수처럼 저장해서 사용한다면 버튼을 클릭해도 리렌더링이 일어나지 않고, 아무런 변화가 일어나지 않는다.

  const [count, setCount] = useState(0); // ? 배열이기 때문에 배열의 구조분해할당으로 적어주는게 일반적

  // const [light, setLight] = useState("OFF");

  let light = "OFF";

  function clickHandler() {
    // setLight(light === "ON" ? "OFF" : "ON");
    light === "ON" ? "OFF" : "ON";
  }

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={clickHandler}>
          {/* 켜기 끄기 텍스트 조건부 렌더링 */}
          {light === "ON" ? "전구 끄기" : "전구 켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );

  // & const state = useState(0); // 초기값 -> state의 값
  // & console.log(state); // 배열형태 [0, f] => 두개의 요소를 담은 배열을 반환한다. 배열의 첫번째 요소는 state의 현재값, 배열의 두번째 요소는 상태를 변화시키는 함수(상태 변화함수)
}

export default App;
