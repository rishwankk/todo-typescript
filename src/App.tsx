import ImageHeader from "./components/ImageHeader"



function App() {


  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
    <ImageHeader />
    <div className="w-[300px] p-5 ">
 <form >
  <input type="text" className="border border-black w-full rounded-md" />
  <button className="w-full bg-green-400 rounded-md">Add</button>

 </form>
    

    </div>

    </div>
    </>
  )
}

export default App
