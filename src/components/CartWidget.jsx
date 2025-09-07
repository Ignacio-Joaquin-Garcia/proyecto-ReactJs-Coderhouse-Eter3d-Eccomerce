import { Link } from "react-router-dom"
import { Badge } from "antd";

import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

export function CartWidget() {
    const cartContext = useContext(ProductsContext);

    return (
        <Link to="/cartList" >
            🛒
            <Badge count={cartContext.totalQuantity} color="#FF5722"/>
        </Link>
    )
}