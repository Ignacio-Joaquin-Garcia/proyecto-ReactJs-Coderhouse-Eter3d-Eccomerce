import { InputNumber } from "antd";
import { useState } from "react";

export function CartProduct(props) {
    const [stock, setNewStock] = useState(props.stockSelected);
    const initialPrice = props.price / props.stockSelected;
    const [price, setPrice] = useState(props.price);

    const stockSelectedChange = (value)=>{
        const stock = value;
        setNewStock(stock);
        const newPrice = initialPrice * stock;
        setPrice(newPrice);
    };


    return (
        <div className="cart-product">
            <input type="checkbox" />
            <img src={props.img} alt="Imagen Carrito" />
            <div className="cart-info">
                <h3 className="cart-product">{props.productName}</h3>
                <p className="cart-description">{props.description}</p>
            </div>
            <div className="cart-stock">
                <h3>Cantidad</h3>
                <InputNumber defaultValue={props.stockSelected} size="large" changeOnWheel={true} onChange={stockSelectedChange}/>
            </div>
            <div className="cart-price">
                <p>${price}</p>

            </div >
        </div>
    )
}