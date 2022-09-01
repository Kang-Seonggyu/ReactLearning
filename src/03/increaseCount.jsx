import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        //state 정의
        this.state = { count : 0 }
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount() {
        //state 변경
        // this.setState( count => {count : count + 1});
        console.log(`뭐야?`);
    }
    render() {
        return (
            <div>
                <span>카운트 : {this.state.count}</span>
                <button onClick={this.increaseCount}>카운트 증가</button>
            </div>
        );
    }
}

// export default Counter;