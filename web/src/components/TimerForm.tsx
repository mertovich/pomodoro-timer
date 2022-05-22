import React from 'react'
import { InputGroup, FormControl, Container } from 'react-bootstrap'

interface IProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleStart: () => void
    handleReset: () => void
    handlePause: () => void
}

const TimerForm: React.FC<IProps> = ({ handleChange, handleStart, handlePause, handleReset }) => {
    return (
        <Container>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Minute</InputGroup.Text>
                <FormControl onChange={handleChange} type='number' aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                <button onClick={handleStart} type="submit">Start</button>
                <button onClick={handlePause} type="submit">Pause</button>
                <button onClick={handleReset} type="submit">Reset</button>
            </InputGroup>
        </Container>
    )
}

export default TimerForm