import React from 'react'
import { InputGroup, FormControl, Container, Button } from 'react-bootstrap'

interface IProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleStart: () => void
    handleReset: () => void
    handlePause: () => void
}

const TimerForm:React.FC<IProps> = ({ handleChange, handleStart, handlePause, handleReset }) => {
    return (
        <Container>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Minute</InputGroup.Text>
                <FormControl onChange={handleChange} type='number' aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                <Button onClick={handleStart} variant="primary" type="submit">Start</Button>
                <Button onClick={handlePause} variant="primary" type="submit">Pause</Button>
                <Button onClick={handleReset} variant="primary" type="submit">Reset</Button>
            </InputGroup>
        </Container>
    )
}

export default TimerForm