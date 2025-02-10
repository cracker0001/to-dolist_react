import React, { useState } from 'react'

const Todo = () => {

const [input,setInput] = useState("");
const [item,setItem] = useState([]);

const addItem = ()=>{
    if(input.trim())
    {
        setItem([...item,input]);
        setInput("");
    }
}
const addInput = (e)=>{
    
    setInput(e.target.value);
}
const removeItem = (index)=>{
    setItem((previousItem)=>previousItem.filter((elem,elemindex)=> elemindex !== index))
}
  return (

    
    <div className='bg-zinc-200 w-full h-screen flex items-center justify-center'>
      <div className='w-[60%] h-1/4  rounded-md '>
        <div >
        <input 
          value = {input}
          onChange={addInput}
        className='px-40 py-3 mr-10 ' type="text" placeholder='Enter the Item'/>
        <button 
        onClick={addItem}
        className='bg-slate-500 text-white font-bold px-2 py-1 rounded-md'>ADD ITEM</button>
        </div>
       {item.map((elem,index)=>(
         <div key={index} className='w-[65%] h-1/4 rounded-md bg-slate-500 mt-10 flex justify-around items-center'>
         <h1 className='font-bold text-xl text-white'>{elem}</h1>
         <span
          onClick={()=>removeItem(index)}
         className='font-bold text-xl text-white cursor-pointer'>&minus;</span>
    </div>
       ))}
        
      </div>
     
    </div>

  
  )
}

export default Todo
