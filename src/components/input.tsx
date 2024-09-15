
type Input={
inputValue:string,
setInputValue:React.Dispatch<React.SetStateAction<string>>

}

const Input = ({inputValue,setInputValue}:Input) => {
  return (
    <input type="text" className="border border-black w-full rounded-md my-2" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} />
  )
}

export default Input
