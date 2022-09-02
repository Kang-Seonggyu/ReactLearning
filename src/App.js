import React, { Component } from "react";

class App extends React.Component {
    render() {
        return(
            <div className="App">
                <h1>게시판</h1>
                <div className="intern-container">
                    <h2>제목</h2>
                    <div>
                        내용
                    </div>
                </div>
                <div className="form-wrapper">
                    <input className="title-input" type="text" placeholder="제목" />
                    <textarea className="text-area" placeholder="내용"></textarea>
                </div>
                <button className="submit-button">입력</button>
            </div>


        )
    }
}

export default App;
