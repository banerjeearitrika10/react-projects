import { useState } from 'react'

import './App.css'
import PasswordGeneratorComponent from './passwordGenerator'

function App() {
  const [colors,setColors] = useState('black')

  return (
    <>
     <div className='w-full h-screen' 
     style={{
      backgroundColor: colors
     }}>
      <PasswordGeneratorComponent/>
      <div className='fixed flex flex-wrap px-4 justify-center inset-x-0 bottom-12'>
      <div className='flex flex-wrap gap-3 bg-blue-50 justify-center
      shadow-lg px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColors('black')} className='outline-none px-4 py-2 text-white rounded-full'
        style={{backgroundColor:'black'}}>Black</button>
        <button onClick={()=>setColors('red')} className='outline-none px-4 py-2 text-white rounded-full'
        style={{backgroundColor:'red'}}>Red</button>
         <button onClick={()=>setColors('green')} className='outline-none px-4 py-2 text-white rounded-full'
        style={{backgroundColor:'green'}}>Green</button>
         <button onClick={()=>setColors('olive')} className='outline-none px-4 py-2 text-white rounded-full'
        style={{backgroundColor:'olive'}}>Olive</button>
         <button onClick={()=>setColors('blue')} className='outline-none px-4 py-2 text-white rounded-full'
        style={{backgroundColor:'blue'}}>Blue</button>
         <button onClick={()=>setColors('yellow')} className='outline-none px-4 py-2  rounded-full'
        style={{backgroundColor:'yellow'}}>Yellow</button>
         <button onClick={()=>setColors('gray')} className='outline-none px-4 py-2 text-white rounded-full'
        style={{backgroundColor:'gray'}}>Gray</button>
         <button onClick={()=>setColors('pink')} className='outline-none px-4 py-2 rounded-full'
        style={{backgroundColor:'pink'}}>Pink</button>
        <button onClick={()=>setColors('lavender')} className='outline-none px-4 py-2 rounded-full'
        style={{backgroundColor:'lavender'}}>Lavender</button>
          <button onClick={()=>setColors('purple')} className='outline-none px-4 py-2 text-white rounded-full'
        style={{backgroundColor:'purple'}}>Purple</button>
          <button onClick={()=>setColors('orange')} className='outline-none px-4 py-2 text-white rounded-full'
        style={{backgroundColor:'orange'}}>Orange</button>
        <button onClick={()=>setColors('white')} className='outline-none px-4 py-2 rounded-full'
        style={{backgroundColor:'white'}}>White</button>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
