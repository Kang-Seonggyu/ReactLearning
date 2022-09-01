import React from "react";

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        //state 정의
        this.state = {
            loading : true,
            formData : 'no data',
        };
        this.handleData = this.handleData.bind(this);
        // 4초 후에 handleData 함수를 호출합니다.
        setTimeout(this.handleData, 4000);
    }

    handleData() {
        const data = 'new data';
        const { formData } = this.state;
        //state 변경
        this.setState({
            loading : false,
            formData : data + formData,
        });
        // this.state.loading 은 현재 true 입니다.
        console.log('loading값', this.state.loading);
        // 이후 호출될 render() 함수에서의 this.state.loading 은 false 입니다.
    }
    render() {
        return (
            <div>
                {/* state 데이터는 this.state로 접근 가능합니다. */}
                <span>로딩중 : {String(this.state.loading)}</span>
                <span>결과 : {this.state.formData}</span>
            </div>
        );
    }
}

export default StateExample;