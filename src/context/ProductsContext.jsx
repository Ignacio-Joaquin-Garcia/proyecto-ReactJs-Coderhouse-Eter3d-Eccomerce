import { createContext, useState } from "react"

import toast from "react-hot-toast"


export const ProductsContext = createContext();

export function ProductsProvider(props){
    const [cartNumber, setCartNumber] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [totalPriceCart, setTotalPriceCart] = useState(0);
    
    const addItemToCart = (cartProduct)=>{
        const productPromise = new Promise((resolve, reject) => {
            cartList.forEach((item) => {
                if(item.id === cartProduct.id){
                    reject("Producto ya agregado anteriormente!"); 
                }
            });
            resolve("Producto añadido al carrito!!");
        });
        toast.promise(
            productPromise,
            {
                loading: 'Loading',
                success: (data) => `${data}`,
                error: (err) => `${err}`,
            },
            {
                style: {
                minWidth: '250px',
                },
                success: {
                duration: 5000,
                icon: '✅',
                },
            }
        );
        productPromise.then(()=>{
            const cartNumberChange = cartNumber + 1;
            const cartListChange = [...cartList, cartProduct];
            const newTotalPrice = totalPriceCart + cartProduct.price;
            setTotalPriceCart(newTotalPrice);
            setCartNumber(cartNumberChange);
            setCartList(cartListChange);
        })
    }
    const changeItemInCart = (productChange)=>{
        const newCartList = [];
        cartList.forEach((item)=>{
            if(item.id === productChange.id){
                newCartList.push(productChange);
            } else{
                newCartList.push(item);
            }
        });
        const preSubidaArray = newCartList;
        let newTotalPrice = 0;
        preSubidaArray.forEach((item)=>{
            newTotalPrice = newTotalPrice + item.price
        })
        setTotalPriceCart(newTotalPrice);
        setCartList(preSubidaArray);
    }
    const removeItemFromCart = (id)=>{
        const prodAEliminar = cartList.find(item => item.id === id);
        const productosActualizados = cartList.filter(item => item.id !== id);
        const newCartNumber = cartNumber - 1;
        const newTotalPrice = totalPriceCart - prodAEliminar.price;
        setTotalPriceCart(newTotalPrice);
        setCartList(productosActualizados);
        setCartNumber(newCartNumber);
    }
    const clearCart = ()=>{
        setCartNumber(0);
        setCartList([]);
        setTotalPriceCart(0);
    }

    const datosContext = {
        listaProds: cartList,
        totalPrice: totalPriceCart,
        totalQuantity: cartNumber,
        addItemToCart,
        changeItemInCart,
        removeItemFromCart,
        clearCart,
    }

    return(
        <ProductsContext.Provider value={datosContext}>
            {props.children}
        </ProductsContext.Provider>
    )
}


