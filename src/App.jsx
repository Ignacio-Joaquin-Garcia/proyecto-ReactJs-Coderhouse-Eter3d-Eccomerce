import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./features/Navbar"
import { Footer } from "./static/Footer"

import { HomeComponent } from "./pages/HomeComponent"
import { Products } from './pages/Products';
import { ItemDetailContainer } from "./pages/ItemDetailContainer";
import { ProductCategory } from './pages/ProductCategory';
import { CartList } from "./pages/CartList";
import { ProductsProvider } from "./context/ProductsContext"

function App() {
  
  
  return (
    <BrowserRouter basename="/proyecto-ReactJs-Coderhouse-Eter3d-Eccomerce/">
      <Navbar/>
      <ProductsProvider>
        <Routes>
          <Route exact path="/" element={<HomeComponent />}/>
          <Route exact path="/products" element={<Products />}/>
          <Route exact path="/products/detail/:id" element={<ItemDetailContainer />}/>
          <Route exact path="/products/category/:category" element={<ProductCategory />}/>
          <Route exact path="/contact" element={<HomeComponent />}/>
          <Route exact path="/cartList" element={<CartList />}/>
        </Routes>
      </ProductsProvider>
      <Footer/>
    </BrowserRouter>
  )
}


export default App