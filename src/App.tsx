import React, { FormEvent, useState } from "react"
import ImageHeader from "./components/ImageHeader"
import Button from "./components/Button"
import ItemList from "./components/ItemList"
import { Item } from "./utils/types"
import Input from "./components/input"


function App() {
 
  const [items,setItems]=useState<Item[]>([])
  const[inputValue,setInputValue]=useState<string>("")

  const handleSubmit=(event:React.FormEvent)=>{
    event.preventDefault()
    setItems((prev)=>[...prev,{title:inputValue,id:Date.now().toString()}])
    setInputValue("")
    

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

<ItemList items={items} setItems={setItems}/>

    </div>

    </div>
    </>
  )
}

export default App
