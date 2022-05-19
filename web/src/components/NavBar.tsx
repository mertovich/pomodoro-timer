import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        pomodoro timer
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar