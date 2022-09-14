import React from 'react';
import Row from './Row';
import './Keypad.css';
const Keypad = ({ onNumClicked, onOperatorClicked, onReset }) => {

    const setNum = (num) => () => {
        onNumClicked(num);

    }

    const setOperator = (op) => () => {
        onOperatorClicked(op)
    }
    return (
        <div className='keypad'>
            <Row >
                <button onClick={ onReset }>AC</button>
            </Row>

            <Row >
                { [7, 8, 9].map((n) => {
                    return (<button onClick={ setNum(n) }>{ n }</button>)
                }) }

                <button onClick={ setOperator('/') }>/</button>

            </Row>
            <Row >
                { [4, 5, 6].map((n) => <button onClick={ setNum(n) }>{ n }</button>) }
                <button onClick={ setOperator('*') }>*</button>
            </Row>


            <Row >
                { [1, 2, 3].map((n) => <button onClick={ setNum(n) }>{ n }</button>) }
                <button onClick={ setOperator('-') }>-</button>
            </Row>

            <Row>
                <button onClick={ setOperator('.') }>.</button>
                <button onClick={ setNum(0) }>0</button>
                <button onClick={ setOperator('+') }>+</button>
                <button onClick={ setOperator('=') }>=</button>
            </Row>


        </div>
    );
};
export default Keypad;