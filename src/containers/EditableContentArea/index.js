import React, { Component } from 'react';
import './index.css';

class EditableContentArea extends Component {
    state = {
        markdown: ''
    }

    handleConvertToText = (text) => {
        this.props.onTextChange(text);
    }

    handleTextChange = (e) => {
        let inputValue = e.target.value;
        this.setState({markdown: inputValue});
        this.handleConvertToText(inputValue);
    }

    render() {
        return ( 
            <div className="EditableContentArea">
                <div className="EditableContentArea-container">
                    <textarea onChange={this.handleTextChange} value={this.state.markdown} className="EditableContentArea__textarea"></textarea>
                </div>
            </div>
         )
    }
}
 
export default EditableContentArea;