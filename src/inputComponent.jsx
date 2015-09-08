import React from 'react';
import {InputLabel} from './inputLabel.jsx';
import {InputField} from './inputField.jsx';

export class InputComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { focused: false };
    }

    handleFocus() {
        this.setState({ focused: true });
    }

    handleBlur() {
        if (!this._inputFieldHasText()) this.setState({ focused: false });
    }

    _inputFieldHasText() {
        return React.findDOMNode(this.refs.inputField).value.length > 0;
    }

    _getBorderBottomString() {
        var color = (this._isFocused() ? this.props.focusedColor : this.props.blurredColor);
        return this.props.borderBottom + ' solid ' + color;
               
    }

    _getTranslateYString() {
        var translateY = (this._isFocused() ? this.props.focusedTranslateY : this.props.blurredTranslateY);
        return 'translateY(' + translateY + ')';
    }

    _getFontSize() {
        return (this._isFocused() ? this.props.focusedFontSize : this.props.blurredFontSize);
    }

    _isFocused() {
        return this.state.focused;
    }

    render() {
        var label           = this.props.label;
        var className       = this.props.className;

        var handleBlur      = this.handleBlur.bind(this);
        var handleFocus     = this.handleFocus.bind(this);

        var fontSize        = this._getFontSize();
        var translateY      = this._getTranslateYString();
        var borderBottom    = this._getBorderBottomString();

        return  <div className={className}>
                    <InputLabel text={label} fontSize={fontSize} translateY={translateY}/>
                    <InputField ref="inputField" focusHandler={handleFocus} blurHandler={handleBlur} borderBottom={borderBottom} />
                </div>
    }
}

InputComponent.defaultProps = { 
    label:              'Type Something...',
    className:          'input-component',
    borderBottom:       '3px',
    focusedColor:       '#52637F',
    blurredColor:       '#2F2B2C',
    focusedFontSize:    '1em',
    blurredFontSize:    '1.75em',
    focusedTranslateY:  '-100%',
    blurredTranslateY:  '0'

}

