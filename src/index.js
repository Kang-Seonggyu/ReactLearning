// 필수 리액트 구동 모듈들.
import React from 'react';
import ReactDOM from 'react-dom/client';
// 초기 화면을 구성하는 사용자 코드.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';

// 리액트 엔진이 화면을 출력하는 코드
// id가 root인 엘리먼트에 컴포넌트를 출력.
//ReactDOM.render(<App />, document.getElementById(root));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 아래 부분은 서비스워커 구동 코드로 오프라인 모드로 작동하는데 도움이되는 모듈입니다.
// If you want your app to work offline and load faster, you can change
// unregister() oto register() below. NOte this comes with some pitfalls.
// Learn more about service workers: http://bit/ly/CRA-PWA
//serviceWorker.unregister();