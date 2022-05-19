import React from 'react'
import { InputGroup, FormControl, Container } from 'react-bootstrap'

type Props = {}

const TimerForm = (props: Props) => {
    return (
        <Container>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Time</InputGroup.Text>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </Container>
    )
}

export default TimerForm