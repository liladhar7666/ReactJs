import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [color, setColor] = useState('olive');
  

  return (
    <>
        <div  className="w-full h-screen duration-200" style = {{backgroundColor : color}}>
        <button outline-none px-4 py-1 rounded-full text-white shadow-lg onClick={() => setColor('red')} style={{backgroundColor:"red" }} class="bg-sky-500/100 ..."></button>
       <button onClick={() => setColor('green')} style={{backgroundColor:"green" }}  class="bg-sky-500/75 ..."></button>
       <button onClick={() => setColor('blue')} style={{backgroundColor:"blue" }} class="bg-sky-500/50 ..."></button> 
        </div>
      
    </>
  )
}

export default App
