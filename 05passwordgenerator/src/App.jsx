import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+"
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])


  useEffect(() => {generatePassword()}, [length, numberAllowed, characterAllowed])

  const copyPasswordToClip = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }


  return (
    <div className="p-4 bg-gray-500 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <div className="mb-4 flex">
        <input type="text" ref={passwordRef} value={password} class="border border-gray-300 px-3 py-2 rounded-md w-full" placeholder="password" readonly />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={copyPasswordToClip}>Copy</button>

      </div>
      <div className="mb-4 flex">
        <div className='flex items-center gap-x-1'>
          <input type="range" min={5} max={50} name='' id='' value={length} onChange={(e) => {setLength(e.target.value)}} className='cursor-pointer'/>
          <label htmlFor='length'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}} name="" id="" />
          <label htmlFor='numbers'>numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={characterAllowed} onChange={() => {setCharacterAllowed((prev) => !prev)}} name="" id="" />
          <label htmlFor='characters'>characters</label>
        </div>
      </div>
      <Card />
    </div>

  )
}

export default App
