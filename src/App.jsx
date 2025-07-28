import { useState } from 'react';
import { Navbar } from "./Navbar"
import { ItemListContainer } from "./ItemListContainer";

function App() {
  const [default1, set] = useState(`Ignacio`) 
  const cambiar = ()=>{
    set("Horacio")
  }
  
  return (
    <>
      <Navbar/>
      <main>
        <ItemListContainer nombre={default1}/> 
        <button onClick={cambiar}>Click Me</button>
      </main>
    </>
  )
}


export default App