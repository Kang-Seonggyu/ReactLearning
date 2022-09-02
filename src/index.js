// 필수 리액트 구동 모듈들.
import React from 'react';
import ReactDOM from 'react-dom/client';
// 초기 화면을 구성하는 사용자 코드.
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import Header from "./DashBoard/Header";
import BoardWrite from "./DashBoard/BoardWrite";
import Body from "./DashBoard/Body";
import Footer from "./DashBoard/Footer";
//import * as serviceWorker from './serviceWorker';

// 리액트 엔진이 화면을 출력하는 코드
// id가 root인 엘리먼트에 컴포넌트를 출력.
//ReactDOM.render(<App />, document.getElementById(root));

const container = ReactDOM.createRoot(document.getElementById('container'));
container.render(
    <div>
        <Header />
        <App />
        <Body />
        <BoardWrite />
        <Footer />
    </div>
);
