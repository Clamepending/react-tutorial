import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')
  function setRandomColor() {
    setColor("#" + Math.floor(Math.random()*16777215).toString(16))
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setColor('red')} style={{backgroundColor:'red'}}>red</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setColor('blue')} style={{backgroundColor:'blue'}}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setColor('green')} style={{backgroundColor:'green'}}>green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setColor('purple')} style={{backgroundColor:'purple'}}>purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setColor('pink')} style={{backgroundColor:'pink'}}>pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setRandomColor()} style={{backgroundColor:'white'}}>RANDOM</button>
        </div>
      </div>
      <h1 >BG changer app  with vite</h1>
    </div>
  )
}

export default App
