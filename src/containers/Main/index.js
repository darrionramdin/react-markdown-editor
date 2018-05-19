import React, { Component } from 'react';
import marked from 'marked';
import './index.css';
import EditableContentArea from '../EditableContentArea';
import PreviewTextArea from '../../components/PreviewTextArea';

class Main extends Component {
    state = {
        convertedText: ''
    }

    convertToText = (markdown) => {
        this.setState({ convertedText: marked(markdown, {sanitize: true}) });
    }

    render() { 
        return ( 
            <div className="Main">
                <div className="Main-left">
                    <EditableContentArea onTextChange={this.convertToText} />
                </div>
                <div className="Main-right">
                    <PreviewTextArea convertedText={this.state.convertedText} />
                </div>
            </div>
         )
    }
}
 
export default Main;