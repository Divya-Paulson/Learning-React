import React, { useState } from 'react';
import OutputScreen from '../OutputScreen';
import Keypad from '../Keypad';


const Calculator = () => {
    const [output, setOutput] = useState('');
    const reset = () => {
        setOutput('');
    };

    const numClick = () => {

    };
    const operatorClick = () => {

    };
    return (<div className='calc'>
        <OutputScreen text={ output } />
        <Keypad onReset={ reset } onNumClicked={ numClick } onOperatorClicked={ operatorClick } />


    </div>
    );
};
export default Calculator;