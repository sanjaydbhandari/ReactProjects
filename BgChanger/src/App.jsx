import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
     <div className="h-screen w-full duration-1000" style={{backgroundColor: color}}>
      <div className="m-10 fixed bg-slate-600 flex flex-wrap justify-center gap-3 shadow-lg inset-x-0 bottom-12 p-1">
        <button type="button" className='px-5 rounded-3xl outline-none text-white' style={{backgroundColor:"#f00"}} onMouseOver={()=>setColor("red")}>Red</button>
        <button type="button" className='px-5 rounded-3xl outline-none text-white' style={{backgroundColor:"yellow"}} onMouseOver={()=>setColor("yellow")}>yelllow</button>
        <button type="button" className='px-5 rounded-3xl outline-none text-white' style={{backgroundColor:"green"}} onMouseOver={()=>setColor("green")}>green</button>
        <button type="button" className='px-5 rounded-3xl outline-none text-white' style={{backgroundColor:"orange"}} onMouseOver={()=>setColor("orange")}>orange</button>
        <button type="button" className='px-5 rounded-3xl outline-none text-white' style={{backgroundColor:"pink"}} onMouseOver={()=>setColor("pink")}>pink</button>
        <button type="button" className='px-5 rounded-3xl outline-none text-white' style={{backgroundColor:"grey"}} onMouseOver={()=>setColor("grey")}>grey</button>
        <button type="button" className='px-5 rounded-3xl outline-none text-white' style={{backgroundColor:"black"}} onMouseOver={()=>setColor("black")}>Black</button>
        <button type="button" className='px-5 rounded-3xl outline-none text-white' style={{backgroundColor:"cyan"}} onMouseOver={()=>setColor("cyan")}>Cyan</button>

      </div>
     </div>
  )
}

export default App
