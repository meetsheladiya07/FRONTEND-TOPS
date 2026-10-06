import { useState } from 'react'
import UserGreeting from './UserGreeting.jsx'
import UserGreetingClass from './UserGreetingClass.jsx'
import MiniProfile from './MiniProfile.jsx'
function App() {

  return (
    <>
      <h1>Welcome to React JSX!</h1>
      <UserGreeting userName="Meet Sheladiya" />
      <UserGreetingClass userName="Meet Sheladiya" />
      <MiniProfile />
    </>
  )
}

export default App
