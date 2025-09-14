import { InputNumber } from "antd";
import { useState } from "react";

export function CartProduct(props) {
    const initialPrice = props.price / props.stockSelected;
    const [price, setPrice] = useState(props.price);
    const [classTrashBin, setClassTrashBin] = useState("")
    const [classTrashCart, setClassTrashCart] = useState("")

    const stockSelectedChange = (value)=>{
        if(value < 1){
            setClassTrashBin("alert-trash");
            setTimeout(()=>{setClassTrashBin("")}, 2000);
            InputNumber.value = 1;
        } else{
            const newStock = value;
            const newPrice = initialPrice * newStock;
            setPrice(newPrice);

            const dataChange = {
                id: props.id,
                productName: props.productName, 
                description: props.description,
                img: props.img,
                price: newPrice,
                stockSelected: newStock,
            }
            

            props.onChange(dataChange)
        }
    };
    const toggleTrashBin = ()=>{
        setClassTrashBin("open");
        setClassTrashCart("cart-remove")
        setTimeout(()=>{
            setClassTrashBin("");
            props.onTrashClick(props.id);
        }, 2000);
    }

    return (
        <div className="cart-product-container">
            <div className="delete-item" onClick={toggleTrashBin}>
                <img className={`trash-top ${classTrashBin}`} src="assets/img/icons/trashBin.svg" alt="Trash Bin (delete)" />
                <img className="trash-bottom" aria-hidden="true" src="assets/img/icons/trashBin.svg" alt="Trash Bin (delete)" />
            </div>
            <div className={`cart-product ${classTrashCart}`}>
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
        </div>
        
    )
}