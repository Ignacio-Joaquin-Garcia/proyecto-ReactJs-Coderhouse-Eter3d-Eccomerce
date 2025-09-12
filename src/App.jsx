import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./features/Navbar"
import { Footer } from "./static/Footer"

import { HomeComponent } from "./pages/HomeComponent"
import { Products } from './pages/Products';
import { ItemDetailContainer } from "./pages/ItemDetailContainer";
import { ProductCategory } from './pages/ProductCategory';
import { CartList } from "./pages/CartList";

import { Toaster } from "react-hot-toast";

function App() {
  
  
  return (
    <>
      <BrowserRouter basename="/proyecto-ReactJs-Coderhouse-Eter3d-Eccomerce/">
        <Navbar/>
          <Toaster toastOptions={{style: {
            border: '1px solid #D84315',
            padding: '16px',
            backgroundColor: '#330B2C',
            color: '#F2F2F2',
          },
          iconTheme: {
            primary: '#FF5722',
            secondary: '#FFFAEE',
          },}} position="top-center" reverseOrder={false}/>
          
          <Routes>
            <Route exact path="/" element={<HomeComponent />}/>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/products/detail/:id" element={<ItemDetailContainer />}/>
            <Route exact path="/products/category/:category" element={<ProductCategory />}/>
            <Route exact path="/contact" element={<HomeComponent />}/>
            <Route exact path="/cartList" element={<CartList />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}


export default App