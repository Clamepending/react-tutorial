import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'> Vite with tailwind</h1>
      <Card username="Marky"/>
      <Card username='Sarah' post='social media manager' img='https://imgs.search.brave.com/gCzsCqjEJ9qFkh1Bbs6KNEJNp1J-1O5-t4m42KvBIh8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucG9rZW1vbi5j/b20vYXNzZXRzL2Nt/czIvaW1nL3Bva2Vk/ZXgvZnVsbC8wMDQu/cG5n'/>
    </>
  )
}

export default App
