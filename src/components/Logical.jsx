import React from "react";

const Logical = () => {
  // logic
  // Logical operators

  const user = {
    isLoggedin: true, // 로그인 여부
    role: "admin", // guest, user 사용자 롤
  };

  // 1. AND (&&) : 좌측 피연산자가 true 이면 우측 피연산자를 반환합니다. 좌측 피연산자가 false 이면 좌측 피연산자를 반환합니다.
  // 관지라페이지 접근 관리
  if (user.isLoggedin && user.role === "admin") {
    // true인 경우 실행 코드
    console.log("✅ 관리자 페이지에 접근합니다.");
  } else {
    // false인 경우 실행 코드
    console.log("❌ 관리자 페이지에 접근 권한이 없습니다.");
  }

  // 2. OR (||) : 좌측 피연산자가 true 이면 좌측 피연산자를 반환합니다. 좌측 피연산자가 false 이면 우측 피연산자를 반환합니다.
  // 사용자페이지 접근 관리
  if (user.isLoggedin || user.role === "admin") {
    // true인 경우 실행 코드
    console.log("✅ 사용자 페이지에 접근합니다.");
  } else {
    // false인 경우 실행 코드
    console.log("❌ 사용자 페이지에 접근 권한이 없습니다.");
  }

  // 로그인 되지 않은 경우
  if (!user.isLoggedin) {
    console.log("❤️‍🔥 로그인 되지 않았습니다.");
  }

  // 3. 구조분해 할당 : 객체나 배열의 속성 값을 추출하여 개별 변수에 할당하는 문법입니다.
  const colors = ["red", "green", "blue"];
  // const firstColor = colors[0];
  // const thirdColor = colors[2];

  const [firstColor, , thirdColor] = colors; // 배열의 두번째 요소를 건너뛰기 위해 빈 칸으로 둠

  console.log("🚀 ~ Logical ~ firstColor:", firstColor);
  console.log("🚀 ~ Logical ~ secondColor:", thirdColor);

  // 4. 객체 구조분해 할당 : 객체의 속성 값을 추출하여 개별 변수에 할당하는 문법입니다.
  const person = { name: "무이치로", age: 20, mbti: "istp" };

  const { age, name: nwa } = person;
  console.log("🚀 ~ Logical ~ name:", nwa);
  console.log("🚀 ~ Logical ~ age:", age);

  // 5. spread syntax : 배열이나 객체를 개별 요소나 속성으로 분리하는 문법입니다.
  const copyColors = [...colors, "yellow"];
  console.log("🚀 ~ copyColors:", copyColors);
  console.log("🚀 ~ real colors:", colors);

  const copyPerson = { ...person, height: 180, mbti: "infp" };
  console.log("🚀 ~ copyPerson:", copyPerson);
  console.log("🚀 ~ real person:", person);

  // view
  return <div>Logical</div>;
};

export default Logical;
