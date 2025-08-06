import { useState } from 'react';

import { Navbar } from "./features/Navbar"
import { Footer } from './static/Footer';

import { ItemListContainer } from "./components/ItemListContainer";
import { Button } from './features/Button';
import { CardContainer } from './features/CardContainer';

import { Presentation } from './static/Presentation';

function App() {
  const [default1, set] = useState(`Ignacio`) 
  const cambiar = ()=>{
    set("Horacio")
  }
  
  return (
    <>
      <Navbar/>
      <main>
        <Presentation/>

        <CardContainer/>

        <ItemListContainer nombre={default1}/> 
        <Button onClick={cambiar} text={"Clickeame"}/>
      </main>
      <Footer/>
    </>
  )
}


export default App