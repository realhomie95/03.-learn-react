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
      <h2>카드 타이틀</h2>
      <p>카드 텍스트입니다</p>
      <p>-------------</p>
    </div>
  );
};

export default Card;
