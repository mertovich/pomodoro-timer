import React from 'react'
import { InputGroup, FormControl, Container } from 'react-bootstrap'

interface IProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleStart: () => void
    handleReset: () => void
    handlePause: () => void
    theme: {
        buttonColor: string
        bgColor: string
        navBarColor: string
        navBarTextColor: string
        textColor: string
    }
}

const TimerForm: React.FC<IProps> = ({ handleChange, handleStart, handlePause, handleReset, theme }) => {
    return (
        <Container>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Minute</InputGroup.Text>
                <FormControl onChange={handleChange} type='number' aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                <button onClick={handleStart} type="submit" style={{
                    backgroundColor: theme.buttonColor,
                    color: theme.textColor,
                    borderColor: theme.buttonColor,
                }} >Start</button>
                <button onClick={handlePause} type="submit" style={{
                    backgroundColor: theme.buttonColor,
                    color: theme.textColor,
                    borderColor: theme.buttonColor,
                }} >Pause</button>
                <button onClick={handleReset} type="submit" style={{
                    backgroundColor: theme.buttonColor,
                    color: theme.textColor,
                    borderColor: theme.buttonColor,
                }} >Reset</button>
            </InputGroup>
        </Container>
    )
}

export default TimerForm