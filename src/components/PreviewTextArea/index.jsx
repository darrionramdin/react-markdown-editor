import React from 'react';
import './index.css';

const PreviewTextArea = ({convertedText}) => {
    return ( 
        <div className="PreviewTextArea">    
            <div dangerouslySetInnerHTML={{__html: convertedText}} className="PreviewTextArea-container">
            </div>
        </div>
    )
}
 
export default PreviewTextArea;