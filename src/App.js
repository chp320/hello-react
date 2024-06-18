/* 최초 내용 */
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


/* (1) App 컴포넌트 함수 내용 수정 */
// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </div>
//   );
// }

// export default App;


/* (2) div 요소로 묶지 않고 Fragment 기능 사용 (리액트 v16 이상부터 적용된 기능) */
// import React, {Fragment} from "react";
// function App() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕?!</h1>
//       <h2>잘 작동하니?!</h2>
//     </Fragment>
//   );
// }

// export default App;


/* (3) Fragment 또다른 표현 방법 */
// import React from "react";

// function App() {
//   return (
//     <>
//       <h1>리액트 안녕??!</h1>
//       <h2>잘 작동하니??!</h2>
//     </>
//   );
// }

// export default App;


/* (4) JSX 내부에 자바스크립트 표현식 사용 -> 코드를 {} 로 감싼다. */
import React from "react";
function App() {
  const name = "리액트111";
  return (
    <>
      <h1>{name} 안녕???!</h1>
      <h2>잘 작동하니???!</h2>
    </>
  );
}

export default App;
