import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  function decreaseHandler(){
    setCount(count - 1);
  }
  function increaseHandler(){
    setCount(count + 1);
  }
  function resetHandler(){
    setCount(count);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-teal-800 flex-col gap-10 overflow-x-hidden overflow-y-hidden">
      <div className="text-stone-100 font-medium text-2xl">Increment & Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-cyan-800">
          <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
          <div className="font-bold gap-12 text-5xl"> {count}</div>
          <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>
      <button onClick={resetHandler} className="bg-blue-500 text-black px-5 py-2 rounded-sm text-[50px]">Reset</button>
    </div>
  )
}

