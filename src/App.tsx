import React, { FormEvent, useState } from "react"
import ImageHeader from "./components/ImageHeader"
import Input from "./components/input"
import Button from "./components/Button"


function App() {
  type Input={
    title:string,
    id:string
  }
  
  const [items,setItems]=useState<Input[]>([])
  const[inputValue,setInputValue]=useState<string>("")

  const handleSubmit=(event:React.FormEvent)=>{
    event.preventDefault()
    setItems((prev)=>[...prev,{title:inputValue,id:Date.now().toString()}])
    setInputValue("")
    

  }
  const handleDelete=(id:string)=>{
    setItems((prev)=>prev.filter((data)=>data.id!==id))
    
  }


  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
    <ImageHeader />
    <div className="w-[300px] p-5 ">
 <form  onSubmit={handleSubmit}>
 <Input inputValue={inputValue} setInputValue={setInputValue} />
<Button className="w-full bg-green-400 rounded-md text-white" Children={"Add"}></Button>
 </form>

 <div className="p-2 bg-slate-500 my-2 rounded-md">
  <ul>

    {items.map((ite)=>(

   <li key={ite.id} className="text-white border border-black my-2 flex justify-between">{ite.title} <Button className="bg-red-600 text-sm" onClick={()=>handleDelete(ite.id)} Children={"delete"}></Button></li>
    ))}
    
  </ul>
 </div>
    

    </div>

    </div>
    </>
  )
}

export default App
