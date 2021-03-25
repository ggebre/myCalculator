import React from 'react' 
import Button from 'react-bootstrap/Button'

const CalculatorButton = (props) => {
    return (
        <div className="top">
                {props.data.map(key => (
                    <Button onClick={props.handleClick} variant="secondary">{key}</Button>
                ))}
                <Button onClick={props.handleClick} variant="warning" >{props.operation}</Button>
        </div>
    )
}

export default CalculatorButton