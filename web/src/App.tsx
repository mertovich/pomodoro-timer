import React from 'react'
import NavBar from './components/NavBar'
import TimerForm from './components/TimerForm'

type Props = {}

const App = (props: Props) => {
  return (
    <div>
      <NavBar/>
      <TimerForm/>
    </div>
  )
}

export default App