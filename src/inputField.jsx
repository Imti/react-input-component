import React from 'react';

export class InputField extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '' }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        var value = this.state.value;

        var handleBlur = this.props.blurHandler;
        var handleFocus = this.props.focusHandler;
        var handleChange = this.handleChange.bind(this);

        var style = { borderBottom: this.props.borderBottom };

        return <input
                    type="text"
                    style={style}
                    className="input"
                    value={value}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onChange={handleChange} 
                />;
    }
}
