// React 기본 구조 명령어 : rafce
// js와 jsx는 부모 자식 관계가 있어야 합니다. (최상위 태그 1개)

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // logic
  // Home, About, Contact 페이지

  // view
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 변수명 작성법 (Naming Conventions)
// camelCase : 낙타등 표기법, 여러 단어로 이루어진 이름을 작성할 때 각 단어의 첫 글자를 대문자로 표기하는 방식입니다. 예를 들어, myVariableName, userProfileData 등이 있습니다.
// PascalCase : 파스칼 표기법, 각 단어의 첫 글자를 대문자로 표기하는 방식입니다. 예를 들어, MyVariableName, UserProfileData 등이 있습니다. 주로 클래스나 컴포넌트 이름에 사용됩니다.
// kebab-case : 케밥 표기법, 단어 사이를 하이픈(-)으로 연결하는 방식입니다. 예를 들어, my-variable-name, user-profile-data 등이 있습니다. 주로 CSS 클래스 이름이나 파일 이름에 사용됩니다.
// snake_case : 스네이크 표기법, 단어 사이를 밑줄(_)로 연결하는 방식입니다. 예를 들어, my_variable_name, user_profile_data 등이 있습니다. 주로 데이터베이스 필드 이름이나 일부 프로그래밍 언어에서 사용됩니다.
