import React, { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'

interface IPros {
    themeChange: (buttonColor: String, bgColor: String, navBarColor: String, navBarTextColor: String, textColor: String) => void
}

const ThemeInput: React.FC<IPros> = ({ themeChange }) => {
    const [buttonColor, setButtonColor] = useState<String>('')
    const [bgColor, setBgColor] = useState<String>('')
    const [navBarColor, setNavBarColor] = useState<String>('')
    const [navBarTextColor, setNavBarTextColor] = useState<String>('')
    const [textColor, setTextColor] = useState<String>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (e.target.name === 'buttonColor') {
            setButtonColor(value)
        } else if (e.target.name === 'bgColor') {
            setBgColor(value)
        } else if (e.target.name === 'navBarColor') {
            setNavBarColor(value)
        } else if (e.target.name === 'navBarTextColor') {
            setNavBarTextColor(value)
        } else if (e.target.name === 'textColor') {
            setTextColor(value)
        }
    }

    return (
        <div className='text-center' style={{
            marginLeft: '40%',
            marginRight: '40%',
        }} >
            <h1>Theme</h1>
            <Row>
                <input name='buttonColor' onChange={handleChange} type='color' />
                <label>Button Color</label>
            </Row>
            <Row>
                <input name='bgColor' onChange={handleChange} type='color' />
                <label>Backgruand color</label>
            </Row>
            <Row>
                <input name='navBarColor' onChange={handleChange} type='color' />
                <label>NavBar Color</label>
            </Row>
            <Row>
                <input name='navBarTextColor' onChange={handleChange} type='color' />
                <label>NavBar Text Color</label>
            </Row>
            <Row>
                <input name='textColor' onChange={handleChange} type='color' />
                <label>Text Color</label>
            </Row>
            <Button onClick={()=> themeChange(buttonColor,bgColor,navBarColor,navBarTextColor, textColor)} variant="primary" type="submit">Theme Change</Button>
        </div>
    )
}

export default ThemeInput