import React, { useState } from "react";

const Counter = ({ number = 5, onIncreaseClick }) => {
  // logic : 상태 관리
  // let count = 0;
  // state : 리액트 컴포넌트에서 상태(state)는 컴포넌트의 데이터나 정보를 저장하고 관리하는 객체입니다.
  const [count, setCount] = useState(0); //2개의 변수를 배열로 반환
  // 첫번째 변수 : 데이터
  // 두번째 변수 : 함수
  // console.log("🚀 ~ Counter ~ count:", count);
  const MAX = 10;
  const MIN = 0;

  const handleIncreae = () => {
    // count += 1;
    // setCount(count + 1);
    if (count < MAX) return setCount(count + number);
    onIncreaseClick();
    // console.log("🚀 ~ Counter ~ count:", count);
  };
  const handleDecrease = () => {
    // count -= 1;
    // setCount(count - 1);
    setCount((prev) => (prev > MIN ? prev - number : MIN));
    // console.log("🚀 ~ Counter ~ count:", count);
  };

  // view : UI
  return (
    <div>
      <div>
        <h1>카운터</h1>
        <h2>{count}</h2>
        {/* html 태그 안에서 자바스크립트 표현식을 사용하려면 중괄호 {} 로 감싸야 합니다. */}
        <div>
          <button type="button" onClick={handleIncreae}>
            +{number}
          </button>
          <button type="button" onClick={handleDecrease}>
            -{number}
          </button>
          <p>-------------</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
