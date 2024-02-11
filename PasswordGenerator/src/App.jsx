import { useCallback, useState, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += ",./;'[]\\=-<>?:\"{}|+_)(*&^%$#@!)"

    for(let i=0; i<length;i++){
      let char = Math.floor(Math.random()*str.length+1)

      pass+=str.charAt(char)

      setPassword(pass)
    }
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])
 
  useEffect(()=>{passwordGenerator()},[length,charAllowed,numberAllowed,passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md flex mx-auto flex-col bg-slate-600 pb-10 shadow-md rounded-lg px-4 my-20 text-orange-600">
      <h1 className='text-2xl text-center p-5 text-orange-400'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3' 
        placeholder='Password'
        readOnly
        ref={passwordRef}/>

        <button 
        type="button" 
        className='bg-orange-600 outline-none text-white p-3'
        onClick={copyPasswordToClipboard}>COPY</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 flex-wrap">
          <input 
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>

          <label>Length : {length}</label>

          <input 
          type="checkbox" 
          defaultChecked = {numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}
          className='ml-3'
          /> Number 

          <input 
          type="checkbox" 
          defaultChecked = {charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev) => !prev)
          }}
          className='ml-3'
          /> Symbol 
        </div>
      </div>
    </div>
    </>
  )
}

export default App
