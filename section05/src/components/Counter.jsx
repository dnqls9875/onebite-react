import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // ? 배열이기 때문에 배열의 구조분해할당으로 적어주는게 일반적

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
