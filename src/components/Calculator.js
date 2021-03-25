import React from 'react' 
import Container from 'react-bootstrap/Container'
import Buttons from './Buttons'
import DisplayResult from './ResultDisplay'
import Operation from '../utility'

class  Calculator extends React.Component {
    state = {
        num: "",
        display: 0,
        numEntered: false,
        previousOperator: null, 
        secondNum: "", 
        saveNum: null
    }
    handleClick = (e) => {
        const textEntered = e.target.textContent
        
        if (textEntered !== "AC"){
            "0123456789.".includes(textEntered) ? this.handleNumberInputs(textEntered) : this.handleOperators(textEntered)
        } else {
            if (this.state.saveNum){
                this.setState({secondNum: this.state.saveNum, display: this.state.saveNum})
            } else {
                this.setState({saveNum: this.state.display})
            }
        }
    }
    handleNumberInputs = (textEntered) => {
        if (!this.state.numEntered){
            this.setState({...this.state, num: this.state.num + textEntered, display: this.state.num + textEntered})
        } else {
            this.setState({...this.state, secondNum: this.state.secondNum + textEntered,  display: this.state.secondNum + textEntered})
        }
    } 
    handleOperators = (textEntered) => {
        let num = parseFloat(this.state.num)
        const operator = this.state.previousOperator
        const num2 = parseFloat(this.state.secondNum)

        if (textEntered !== "%" && textEntered !== "+/-"){
            if( num2 ){
                num = this.selectOperators(num, operator, num2)
                this.setState({...this.state, num: num, secondNum: "", display: num, previousOperator: textEntered})
            } else {
                this.setState({...this.state, previousOperator: textEntered, numEntered: true})
            }
        } else {
            let num = this.selectOperators(this.state.num, textEntered) 
            this.setState({...this.state, num: num, display: num})
        }
    }
    selectOperators = (num1 , operator, num2) => {
        let operation 
        switch (operator) {
            case "+":
                operation = Operation.add(num1)
                return operation(num2)
            case "-":
                operation = Operation.subtract(num1)
                return operation(num2)
            case "X":
                operation = Operation.multiply(num1)
                return operation(num2)
            case "÷":
                operation = Operation.division(num1)
                return operation(num2)
            case "%": 
                 return Operation.percentage(num1)
            case "+/-": 
                return Operation.plusMinus(num1)
            default:
                break
        }
    }
    
    render() {
        
        return (
            <Container style={{backgroundColor: "black", width: "600px"}}>
                <DisplayResult result={this.state.display}/>
                <Buttons handleClick={this.handleClick} result={this.state.display}/>
            </Container>
        )
    }
    
} 
export default Calculator