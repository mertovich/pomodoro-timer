import React from 'react'
import NavBar from './components/NavBar'
import TimerForm from './components/TimerForm'
import Timer from './components/Timer'

type Props = {}

const App = (props: Props) => {
  return (
    <div>
      <NavBar/>
      <TimerForm/>
      <Timer/>
    </div>
  )
}

export default App