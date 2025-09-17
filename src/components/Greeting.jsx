// 컴포넌트에서 React를 import 합니다.
// jsx 설명 : 자바스크립트와 XML의 합성어로, 자바스크립트 코드 안에 HTML과 유사한 문법을 사용할 수 있게 해줍니다. 리액트 컴포넌트를 작성할 때 주로 사용됩니다.

import React from "react";

const Greeting = () => {
  return (
    <div className="Greeting">
      <h1>안녕하세요, JM입니다!</h1>
      <p>리액트 컴포넌트 예제입니다.</p>
      <p>-------------</p>
    </div>
  );
};

export default Greeting;
