import React, { useState } from "react";

const Counter = () => {
  // logic : 상태 관리
  // let count = 0;
  // state : 리액트 컴포넌트에서 상태(state)는 컴포넌트의 데이터나 정보를 저장하고 관리하는 객체입니다.
  const [count, setCount] = useState(0);
  // console.log("🚀 ~ Counter ~ count:", count);
  const MAX = 10;
  const MIN = 0;

  const handleIncreae = () => {
    // count += 1;
    // setCount(count + 1);
    setCount((prev) => (prev < MAX ? prev + 1 : MAX));
    // console.log("🚀 ~ Counter ~ count:", count);
  };
  const handleDecrease = () => {
    // count -= 1;
    // setCount(count - 1);
    setCount((prev) => (prev > MIN ? prev - 1 : MIN));
    // console.log("🚀 ~ Counter ~ count:", count);
  };

  // view : UI
  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      {/* html 태그 안에서 자바스크립트 표현식을 사용하려면 중괄호 {} 로 감싸야 합니다. */}
      <div>
        <button type="button" onClick={handleIncreae}>
          +1
        </button>
        <button type="button" onClick={handleDecrease}>
          -1
        </button>
        <p>-------------</p>
      </div>
    </div>
  );
};

export default Counter;
