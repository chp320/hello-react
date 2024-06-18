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
// import React from "react";
// function App() {
//   const name = "리액트111";
//   return (
//     <>
//       <h1>{name} 안녕???!</h1>
//       <h2>잘 작동하니???!</h2>
//     </>
//   );
// }

// export default App;


/* (5) JSX 내부에 자바스크립트 표현식 사용 -> {} 내부에 '조건부 연산자' 사용 */
// import React from "react";

// function App() {
//   // const name = '리액트';
//   const name = '뤼액트';
//   return (
//     <div>
//       {name == '리액트' ? (
//         <h1>리액트입니다.</h1>
//       ) : (
//         <h2>리액트가 아닙니다.</h2>
//       )}
//     </div>
//   );
// }

// export default App;


/* (6) JSX 내부에 자바스크립트 표현식 사용 -> '조건부 연산자' 또다른 표현 */
// import React from "react";

// function App() {
//   const name = '뤼액트';
//   return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
// }

// export default App;


/* (7) JSX 내부에 자바스크립트 표현식 사용 -> '조건부 연산자' 또다른 표현 */
// import React from "react";

// function App() {
//   const name = '리액트';
//   // const name = '뤼액트';
//   return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
// }

// export default App;


/* (8) undefined 렌더링하지 않기 */
// import React from "react";
// import './App.css';

// function App() {
//   const name = undefined;
//   return name || '값이 undefined 입니다.';    // string 은 참(true)이기 때문에 undefined은 노출되지 않고 string 만 노출됨. 만일 name 이 값이 있는 경우엔 그 값만 노출됨
// }

// export default App;


/* (9) JSX 내부에서 undefined 렌더링 하기 */
// import React from "react";
// import './App.css';

// function App() {
//   // const name = 'undefined';
//   const name = '123';
//   // return <div>{name}</div>;
//   return <div>{name || '리액트'}</div>; // undefined 인 경우 '리액트' 문구를 노출함
// }

// export default App;


/* (10) 인라인 스타일링 - DOM 요소에 스타일 적용 시 '문자열 형태'가 아닌 '객체 형태'로 넣어 주어야 함 */
// import React from "react";

// function App() {
//   const name = '리액트';
//   const style = {
//     // background-color 는 backgroundColor와 같이 '카멜 표기법'으로 작성
//     backgroundColor: 'black',
//     color:'aqua',
//     fontSize: '48px',
//     fontWeight: 'bold',
//     padding: 16
//   };
//   return <div style={style}>{name}</div>;
// }

// export default App;


/* (11) 인라인 스타일링 - style 객체를 미리 선언하지 않고 태그 내 속성 값으로 바로 적용 */
// import React from "react";

// function App() {
//   const name = '리액트';
//   return (
//     <div
//       style={
//         {
//           // background-color 는 backgroundColor와 같이 '카멜 표기법'으로 작성
//           backgroundColor: 'black',
//           color:'aqua',
//           fontSize: '48px',
//           fontWeight: 'bold',
//           padding: 16          
//         }
//       }
//     >
//       {name}
//     </div>
//   )
// };

// export default App;


/* (12) css 속성 대신 className 사용 */
// import React from "react";
// import './App.css';

// function App() {
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

// export default App;


/* (13) 주석 */
import React from "react";
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      {/* 주석은 이렇게 작성합니다. */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나
      /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
      <input />
    </>
  );
}

export default App;
