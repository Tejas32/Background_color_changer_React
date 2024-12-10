import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive")
  
  return (
  
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center rounded-full px-3 py-2 bg-white shadow-lg gap-2">

            <button onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}>Red</button>
            
            <button onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}>green</button>

            <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}>blue</button>

            <button onClick={() => setColor("olive")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor: "olive"}}>Olive</button>

            <button onClick={() => setColor("grey")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor: "grey"}}>Grey</button>

            <button onClick={() => setColor("purple")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor: "purple"}}>Purple</button>

            <button onClick={() => setColor("lavender")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor: "lavender"}}>Lavender</button>

            <button onClick={() => setColor("white")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg"
            style={{backgroundColor: "white"}}>White</button>

            <button onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor: "black"}}>Black</button>

          </div>
        </div>

      </div>
  
  )
}

export default App
