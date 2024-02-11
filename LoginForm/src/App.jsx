import {useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <h1 id='count'>count : {count}</h1>
    <button className="bg-slate-500" onClick={()=>setCount(count+2)}>click</button>
    </>
  );
}

export default App
