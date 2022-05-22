import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import TimerForm from './components/TimerForm'
import Timer from './components/Timer'
import ThemeInput from './components/ThemeInput'

type Props = {}

const App = (props: Props) => {
  const [timer, setTimer] = useState<number>(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [viewTime, setViewTime] = useState<string>('')
  const [buttonColor, setButtonColor] = useState<string>('')
  const [bgColor, setBgColor] = useState<string>('')
  const [navBarColor, setNavBarColor] = useState<string>('')
  const [navBarTextColor, setNavBarTextColor] = useState<string>('')
  const [textColor, setTextColor] = useState<string>('')


  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        timercontrol()
        setTimer(timer - 1)
        viewTimeChenge()
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isRunning, timer])

  const themeChange = (buttonColor: string, bgColor: string, navBarColor: string, navBarTextColor: string, textColor: string) => {
    setButtonColor(buttonColor)
    setBgColor(bgColor)
    setNavBarColor(navBarColor)
    setNavBarTextColor(navBarTextColor)
    setTextColor(textColor)
    console.log(buttonColor)
  }

  const viewTimeChenge = () => {
    const minute = Math.floor(timer / 60)
    const second = timer % 60
    setViewTime(`${minute}:${second < 10 ? '0' : ''}${second}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value)
    value = value * 60
    setTimer(value)
  }

  const timercontrol = () => {
    if (timer <= 0) {
      setIsRunning(false)
      setIsPaused(false)
      setIsReset(false)
    }
  }

  const handleStart = () => {
    setIsRunning(true)
    setIsPaused(false)
    setIsReset(false)
  }

  const handlePause = () => {
    setIsRunning(false)
    setIsPaused(true)
    setIsReset(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setIsPaused(false)
    setIsReset(true)
    setTimer(0)
    setViewTime('00:00')
  }

  const theme = {
    buttonColor: buttonColor,
    bgColor: bgColor,
    navBarColor: navBarColor,
    navBarTextColor: navBarTextColor,
    textColor: textColor
  }

  return (
    <div style={{
      backgroundColor: theme.bgColor,
      height: '100vh',
      width: '100vw',
      overflowX: 'hidden',
    }} >
      <NavBar theme={theme} />
      <TimerForm theme={theme} handleChange={handleChange} handleStart={handleStart} handleReset={handleReset} handlePause={handlePause} />
      <Timer theme={theme} viewTime={viewTime} />
      <ThemeInput theme={theme} themeChange={themeChange} />
    </div>
  )
}

export default App