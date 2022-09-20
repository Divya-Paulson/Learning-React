import React from 'react';
import './OutputScreen.css';
const OutputScreen = (props) => {



    return (
        <div className='output-screen'>

            { props.text }

        </div>
    );
};
export default OutputScreen;