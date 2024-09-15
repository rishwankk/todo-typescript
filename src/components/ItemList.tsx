import { Item } from "../utils/types"
import Button from "./Button"


type ItemList ={
    items:Item[],
    setItems:React.Dispatch<React.SetStateAction<Item[]>>
}

const ItemList = ({items,setItems}:ItemList) => {
    const handleDelete=(id:string)=>{
        setItems((prev)=>prev.filter((data)=>data.id!==id))
        
      }
  return (
    <div className="p-2 bg-slate-500 my-2 rounded-md">
  <ul>

    {items.map((ite)=>(

   <li key={ite.id} className="text-white border border-black my-2 flex justify-between">{ite.title} <Button className="bg-red-600 text-sm" onClick={()=>handleDelete(ite.id)} Children={"delete"}></Button></li>
    ))}
    
  </ul>
 </div>
    
  )
}

export default ItemList