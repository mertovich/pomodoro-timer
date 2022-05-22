import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

interface IProps {
    theme: {
        buttonColor: string
        bgColor: string
        navBarColor: string
        navBarTextColor: string
        textColor: string
    }
}

const NavBar: React.FC<IProps> = ({ theme }) => {
    return (
        <div>
            <Navbar style={{
                backgroundColor: theme.navBarColor,
            }}>
                <Container>
                    <Navbar.Brand href="#home" style={{
                        color: theme.navBarTextColor,
                    }} >
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