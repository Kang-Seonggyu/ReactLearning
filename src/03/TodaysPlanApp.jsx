import React from "react";
import TodaysPlan from "./TodaysPlan";

class TodaysPlanApp extends React.Component {
    render() {
        const { onButtonClick, hasPlan } = this.props;
        return (
            <div className="body">
                {hasPlan ? <TodaysPlan /> : null}
                <button onClick={onButtonClick}>
                    ęłíěě
                </button>
            </div>
        );
    }
}

export default TodaysPlanApp;