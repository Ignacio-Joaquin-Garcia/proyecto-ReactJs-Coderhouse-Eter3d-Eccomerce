import { Navbar } from "./features/Navbar"
import { Footer } from './static/Footer';

import { CardContainer } from './features/CardContainer';
import { CustomOrder } from './features/CustomOrder';

import { Presentation } from './static/Presentation';
import { Deliveries } from './static/Deliveries';

function App() {
  
  
  return (
    <>
      <Navbar/>
      <main>
        <Presentation/>

        <CardContainer/>

        <Deliveries/>

        <CustomOrder/>

      </main>
      <Footer/>
    </>
  )
}


export default App