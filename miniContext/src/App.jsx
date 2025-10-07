import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1 className='text-3xl'>React Context</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
