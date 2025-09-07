import { createContext, useState } from "react"

export const ProductsContext = createContext();

export function ProductsProvider(props){
    const [cartNumber, setCartNumber] = useState(0);
    const [cartList, setCartList] = useState([]);

    //Funciones del context
    const addItemToCart = (cartProduct)=>{
        const cartNumberChange = cartNumber + 1;
        const cartListChange = [...cartList, cartProduct];

        setCartNumber(cartNumberChange);
        setCartList(cartListChange);
        console.log("Carrito: " + cartNumber);
        console.log(cartList)
    }
    const removeItemFromCart = (id)=>{
        const idAEliminar = id;
        const productosActualizados = cartList.filter(item => item.id !== idAEliminar);
        console.log(productosActualizados);
    }
    const clearCart = ()=>{
        setCartNumber(0);
        setCartList([]);
    }





    const datosContext = {
        listaProds: cartList,
        totalPrice: 0,
        totalQuantity: cartNumber,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        
    }

    return(
        <ProductsContext.Provider value={datosContext}>
            {props.children}
        </ProductsContext.Provider>
    )
}


