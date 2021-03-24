import React from 'react' 
import Container from 'react-bootstrap/Container'

import Button from 'react-bootstrap/Button'  

const Buttons = (props) => {
    const firstRow = ['AC', '+/-', '%']
    const secondRow = [7, 8, 9] 
    const thirdRow = [4,5,6]
    const fourthRow = [1,2,3]
    
    return (
        <Container >
            
            
            <div className="top">
                {firstRow.map(key => (
                        <Button onClick={props.handleClick} variant="secondary">{key}</Button>
                    ))}
                <Button onClick={props.handleClick} variant="warning" >÷</Button>
            
            </div>
            <div className="top">
            {secondRow.map(key => (
                        <Button onClick={props.handleClick} variant="secondary">{key}</Button>
                    ))}
                <Button onClick={props.handleClick} variant="warning" >X</Button>
            </div>
            <div className="top">
                {thirdRow.map(key => (
                        <Button onClick={props.handleClick} variant="secondary">{key}</Button>
                    ))}
                <Button onClick={props.handleClick} variant="warning" >-</Button>
            </div>
            <div className="top">
                {fourthRow.map(key => (
                        <Button onClick={props.handleClick} variant="secondary">{key}</Button>
                    ))}
                <Button onClick={props.handleClick} variant="warning" >+</Button>
            </div>
            <div className="bottom">
                <Button onClick={props.handleClick} variant="secondary">0</Button>
                <Button onClick={props.handleClick} variant="secondary">.</Button>
                <Button onClick={props.handleClick} variant="warning">=</Button>
            </div>
        </Container>
    )
} 
export default Buttons