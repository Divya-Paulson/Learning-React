import React from 'react';
import './OutputScreen.css';
const OutputScreen = (props) => {



    return (
        <div className='output-screen'>

            <input type='text'>{ props.text }</input>

        </div>
    );
};
export default OutputScreen;