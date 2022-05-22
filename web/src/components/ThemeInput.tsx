import React, { useState } from 'react'
import { Row } from 'react-bootstrap'

interface IPros {
    themeChange: (buttonColor: string, bgColor: string, navBarColor: string, navBarTextColor: string, textColor: string) => void
    theme: {
        buttonColor: string
        bgColor: string
        navBarColor: string
        navBarTextColor: string
        textColor: string
    }
}

const ThemeInput: React.FC<IPros> = ({ themeChange, theme }) => {
    const [buttonColor, setButtonColor] = useState<string>('')
    const [bgColor, setBgColor] = useState<string>('')
    const [navBarColor, setNavBarColor] = useState<string>('')
    const [navBarTextColor, setNavBarTextColor] = useState<string>('')
    const [textColor, setTextColor] = useState<string>('')

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
            <h1 style={{ color: theme.textColor }} >Theme</h1>
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
            <button onClick={() => themeChange(buttonColor, bgColor, navBarColor, navBarTextColor, textColor)} type="submit" style={{
                backgroundColor: theme.buttonColor,
                color: theme.textColor,
                borderColor: theme.buttonColor,
            }} >Theme Change</button>
        </div>
    )
}

export default ThemeInput