import { createContext, useState } from "react"

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) =>{
    const [listaProds, setListaProds] = useState([]);

    return(
        <ProductsContext.Provider value={[listaProds, setListaProds]}>
            {children}
        </ProductsContext.Provider>
    )
}

