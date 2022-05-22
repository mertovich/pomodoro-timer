import React from 'react'
import { Container } from 'react-bootstrap'

interface IProps {
    viewTime: string
    theme: {
        buttonColor: string
        bgColor: string
        navBarColor: string
        navBarTextColor: string
        textColor: string
    }
}

const Timer: React.FC<IProps> = ({ viewTime, theme }) => {
    return (
        <Container className='text-center' >
            <p style={{ marginTop: '5%', fontSize: '10rem', color: theme.textColor }} >{viewTime}</p>
        </Container>
    )
}

export default Timer