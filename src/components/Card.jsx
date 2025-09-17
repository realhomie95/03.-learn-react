// 컴포넌트에서 React를 import 합니다.

import React from "react";

const Card = () => {
  return (
    <div className="Card">
      <img
        src="https://designcompass.org/wp-content/uploads/2024/10/logo-naver.png"
        alt="네이버"
        width={200}
      />
      <h2>네이버 카드</h2>
      <p>혜택이 쏟아진다!!</p>
      <p>-------------</p>
    </div>
  );
};

export default Card;
