import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { DataBaseContext } from "../context/DataBaseContext";
import { ProductsContext } from "../context/ProductsContext";
import { ItemDetail } from "../static/ItemDetail";

export function ItemDetailContainer(){
    const [data, setData] = useState(null);
    const dataBaseContext = useContext(DataBaseContext)
    const PARAMS = useParams();
    useEffect(()=>{        
        const apiData = dataBaseContext.dataProducts;
        if(apiData != []){
            const itemData = apiData.find((prod) => (prod.id == PARAMS.id))
            console.log(itemData)
            setData(itemData)
        }
    },[dataBaseContext.dataProducts, PARAMS.id]);

    const cartContext = useContext(ProductsContext)
    const navigate = useNavigate();
    function handleOrder(id, productName, price, description, img){
        const producto = {id: id, productName: productName, price: price, description: description, img: img, stockSelected: 1};
        cartContext.addItemToCart(producto)
        navigate("/finish-order");
    }

    return (
        <>
            {data ? (<ItemDetail id={data.id} image={data.image} title={data.title} price={data.price} description={data.description} handleOrder={handleOrder} />) : (<p>Cargando...</p>)}
        </>
    );
}
