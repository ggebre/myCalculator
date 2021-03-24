import React from 'react' 

import Container from 'react-bootstrap/Container'
import FormLabel from 'react-bootstrap/FormLabel'
const DisplayResult = (props) => {
    
    return (
        <Container style={{backgroundColor: "cyan"}}>
            <FormLabel>{props.result}</FormLabel>
        </Container>
    )
} 

export default DisplayResult