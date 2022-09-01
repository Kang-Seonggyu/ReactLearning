import React from "react";
import PropTypes from "prop-types";

class DefaultPropsComponent extends React.Component {
    render() {
        let message1 ='';
        if (this.props.boolValue === false) {
            message1 = 'boolValue 기본값이 false입니다.';
        }
        let message2 ='';
        if (this.props.boolValueWithoutDefault === false) {
            message2 = 'boolValueWithoutDefault 기본값이 false입니다.\n';
        }
        return (
            <div className="massage-container">
                <div>{message1}</div>
                <div>{message2}</div>
            </div>
        );
    }
}

DefaultPropsComponent.propTypes = {
    boolValue : PropTypes.bool,
    boolValueWithoutDefault : PropTypes.bool,
};

//기본값을 선언하는 예제
DefaultPropsComponent.defaultProps = {
    boolValue :false,
    boolValueWithoutDefault : false,
};

export default DefaultPropsComponent;