import React, { Component } from "react";
import PropsComponent from "./03/PropsComponent";
import TodaysPlan from "./03/TodaysPlan";
import ChildComponent from "./03/ChildComponent";
import BooleanComponent from "./03/BooleanComponent";
import ChildComponent2 from "./03/ChildComponent2";
import DefaultPropsComponent from "./03/DefaultPropsComponent";
import ChildProperty from "./03/ChildProperty";
import './App.css';
import StateExample from "./03/StateExample";
import LifecycleExample from "./03/LifecycleExample";
import Counter from "./03/Counter";
import newCounter from "./03/NewCounter";
import NewCounter from "./03/NewCounter";
import ListExample from "./03/ListExample";
import TodaysPlanApp from "./03/TodaysPlanApp";
import Todolist from "./03/Todolist";
import MakeRadio from "./03/MakeRadio";
import CounterApp from "./03/CounterApp";
import Counter2 from "./03/Counter2";
import ScrollSpy from "./03/ScrollSpy";
import Counter3 from "./03/Counter3";
import Input from "./03/Input";

var cart = { name : '도서', price : 1500 };
var getTotal = function(param) {
    return param.price + "원";
};
/* // App 1 증가 버튼 함수
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count : 10 };
        this.resetCount = this.resetCount.bind(this);
    }
    resetCount() {
        this.setState(({ count }) => ({ count : count + 10 }));
    }
    render() {
        return (
            <div>
                <div><Counter count={this.state.count} /></div>
                <div><NewCounter count={this.state.count} /></div>
                <button onClick={this.resetCount}>{this.state.count +10}으로 초기화</button>
            </div>
        );
    }
}
 */



// 앞 내용 총괄.
class App extends React.Component {
    render() {
        return(
        <div className="body">
            <img src="http://www.easyspub.co.kr/images/logo_footer.png" />
            <TodaysPlan />
            <PropsComponent name="두잇 리액트" />
            <MyComponent name="message" />
            <div>안녕하세요</div>
            <div>{cart.name}의 가격은 {getTotal(cart)}입니다.</div>
            <div><b>지루할 때 :</b><BooleanComponent amooguna /></div>
            <div><b>즐거울 때 :</b><BooleanComponent /></div>
            <ChildComponent2
                objValue={{age : 20 }}
                requiredStringValue="문자"
            />
            <DefaultPropsComponent />
            <ChildProperty>
                <div>
                    <button>자식 노드</button>
                </div>
            </ChildProperty>
            <StateExample />
            <LifecycleExample />
            <TodaysPlanApp />
            <ListExample />
            <Todolist />
            <MakeRadio id="R1" />
            <div></div>
            <MakeRadio id="R2" />
            <Counter />
            <CounterApp />
            <Counter2 />
            <ScrollSpy>이 영역이 화면 상에 있으면 콘솔창에 Enter 아니면 Exit. </ScrollSpy>
            <Counter3 />
            <Input />
        </div>
        );
    }
}

class MyComponent extends React.Component {
    render() {
        const name= this.props.name;
        return (
            <span>
                {name}
            </span>
        );
    }
}


export default App;
