import React from "react";
import Logical from "../components/Logical";
import Greeting from "../components/Greeting";
import Card from "../components/Card";
import Counter from "../components/Counter";
import Move from "../components/Move";

const Home = () => {
  // logic
  const handleIncrease = () => {
    console.log("💘 더하기 버튼 클릭!!");
  };

  //view
  return (
    <div>
      Home
      {/* 페이지 이동 버튼 */}
      <Move />
      <Logical />
      <Greeting username="카마도 탄지로" />
      <Greeting username="아가츠마 젠이츠" />
      <Greeting username="토미오카 기유" />
      <Card />
      <Counter onIncreaseClick={handleIncrease} />
      {/* 숫자가 5씩 증가하는 카운터 만들기 */}
      <Counter number={5} onIncreaseClick={handleIncrease} />
    </div>
  );
};

export default Home;
