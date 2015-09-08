import React from 'react';

export class InputLabel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var text = this.props.text;

        var style = {
            fontSize: this.props.fontSize,
            transform: this.props.translateY
        }

        return <div className="label" style={style}> {text} </div>
    }
}
