import "./App.css";
import Register from "./components/Register.jsx";

// App Components
function App() {
  return (
    <>
      <Register />
    </>
  );

  // & const state = useState(0); // 초기값 -> state의 값
  // & console.log(state); // 배열형태 [0, f] => 두개의 요소를 담은 배열을 반환한다. 배열의 첫번째 요소는 state의 현재값, 배열의 두번째 요소는 상태를 변화시키는 함수(상태 변화함수)
}

export default App;
