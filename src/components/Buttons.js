import React from 'react' 
import Container from 'react-bootstrap/Container'
import CalculatorButton from './CalculatorButton'
import Button from 'react-bootstrap/Button'  

const Buttons = (props) => {
    const data = [
        {
            buttonText: ['AC', '+/-', '%'],
            operation: "÷"
        },
        {
            buttonText: [7, 8, 9],
            operation: "X"
        },
        {
            buttonText: [4,5,6],
            operation: "-"
        },
        {
            buttonText: [1,2,3],
            operation: "+"
        }
    ]
    
    return (
        <Container >
            {
                data.map( row => (
                    <CalculatorButton 
                        handleClick = {props.handleClick}
                        data = {row.buttonText}
                        operation={row.operation}
                /> 
                ))
            }
            <div className="bottom">
                <Button onClick={props.handleClick} variant="secondary">0</Button>
                <Button onClick={props.handleClick} variant="secondary">.</Button>
                <Button onClick={props.handleClick} variant="warning">=</Button>
            </div>
        </Container>
    )
} 
export default Buttons