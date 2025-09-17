import { Link } from "react-router-dom"
import { Badge } from "antd";

import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

export function CartWidget(props) {
    const cartContext = useContext(ProductsContext);

    return (
        <Link to="/cartList" className={props.className}>
            🛒
            <Badge count={cartContext.totalQuantity} color="#FF5722"/>
        </Link>
    )
}