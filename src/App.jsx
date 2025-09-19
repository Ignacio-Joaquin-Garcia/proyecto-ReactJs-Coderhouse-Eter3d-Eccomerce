import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./features/Navbar"
import { Footer } from "./static/Footer"
import { HomeComponent } from "./pages/HomeComponent"
import { Products } from './pages/Products';
import { ItemDetailContainer } from "./pages/ItemDetailContainer";
import { ProductCategory } from './pages/ProductCategory';
import { Contact } from "./pages/Contact";
import { CartList } from "./pages/CartList";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AgregarProdAdmin } from "./pages/AgregarProdAdmin";
import { FinishOrder } from "./pages/FinishOrder";
import { AvailableColours } from "./pages/AvailableColours";
import { Toaster } from "react-hot-toast";
function App() {
  return (
      //proyecto-ReactJs-Coderhouse-Eter3d-Eccomerce/
      <BrowserRouter basename="/proyecto-ReactJs-Coderhouse-Eter3d-Eccomerce/">
        <Navbar/>
          <Toaster toastOptions={{style: {
            border: '1px solid #D84315',
            padding: '16px',
            backgroundColor: '#3e0f36ff',
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
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/cartList" element={<CartList />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/register" element={<Register />}/>
            <Route exact path="/agregar-prod" element={<AgregarProdAdmin />}/>
            <Route exact path="/finish-order" element={<FinishOrder />}/>
            <Route exact path="/available-colours" element={<AvailableColours />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
  )
}
export default App