import React from 'react'
import { Container } from 'react-bootstrap'

interface IProps {
    viewTime: string
}

const Timer: React.FC<IProps> = ({ viewTime }) => {
    return (
        <Container className='text-center' >
            <p style={{ marginTop: '5%', fontSize: '10rem' }} >{viewTime}</p>
        </Container>
    )
}

export default Timer