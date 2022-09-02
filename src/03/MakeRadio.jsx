import React from "react";

class MakeRadio extends React.PureComponent {
    render() {
        return [1,2,3].map((num)=>(
            <input type="radio" name={this.props.id} key={`${num}`} value={num} label={`${num}개`} />
        ));
    }
}

export default MakeRadio;