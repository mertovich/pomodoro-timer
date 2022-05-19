import React from 'react'
import { Container } from 'react-bootstrap'

type Props = {}

const Timer = (props: Props) => {
    return (
        <Container className='text-center' >
            <p style={{marginTop: '5%', fontSize: '10rem'}} >Time</p>
        </Container>
    )
}

export default Timer