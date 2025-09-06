import { Link } from "react-router-dom"
//<img src="" alt="shoppingCart" /> 

export function CartWidget() {
    return (
        <Link to="/cartList" >
            🛒
        </Link>
    )
}