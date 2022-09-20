import React, { useState } from 'react';
import OutputScreen from '../OutputScreen';
import Keypad from '../Keypad';

const Operand1 = 0, Operator = 1, Operand2 = 2;


const Calculator = () => {
    const [output, setOutput] = useState('');
    const [calcState, setCalcState] = useState(Operand1);
    const [num1, setNum1] = useState(0);
    const [operator, setOperator] = useState('');
    const [num2, setNum2] = useState(0);
    const [equal, setEqual] = useState(0);
    console.log(num1, num2)

    const reset = () => {
        setOutput('');
        setNum1(0);
        setNum2(0);
        setCalcState(Operand1);
    };

    const numClick = (num) => {
        let currentNum = 0;
        let setFn = null;
        // if (calcState === Operand1) {
        //     currentNum = num1;
        // } else if (calcState === Operand2) {
        //     currentNum = num2;
        // }

        // currentNum = (currentNum * 10) + num;

        // if (calcState === Operand1) {
        //     setNum1(currentNum);
        // } else if (calcState === Operand2) {
        //     setNum2(currentNum);
        // }
        if (calcState === Operand1) {
            currentNum = num1;
            setFn = setNum1;
        } else if (calcState === Operand2) {
            currentNum = num2;
            setFn = setNum2;
        }
        currentNum = (currentNum * 10) + num;
        setFn(currentNum);
        let newOutput = '';
        if (calcState === Operand1) {
            newOutput = currentNum;
        } else if (calcState == Operand2) {
            newOutput = `${num1} ${operator} ${currentNum}`
        }
        setOutput(newOutput);
    };
    const operatorClick = (op) => {
        setOperator(op);
        setCalcState(Operand2);
        let newOutput = `${num1} ${op}`;
        setOutput(newOutput);
    };
    const equalClick = (eq) => {
        setEqual(eq);
        let newOutput = 0;
        if (operator === '+')
            newOutput = num1 + num2;
        else if (operator === '-')
            newOutput = num1 - num2;
        else if (operator === '*')
            newOutput = num1 * num2;
        else if (operator === '/')
            newOutput = num1 / num2;
        setOutput(newOutput);

    };
    return (<div className='calc'>
        <OutputScreen text={ output } />
        <Keypad onReset={ reset } onNumClicked={ numClick } onOperatorClicked={ operatorClick } onEqual={ equalClick } />


    </div>
    );
};
export default Calculator;