import { CardProduct } from "./CardProduct"

export function ProductListCards(props){

    return(
        
        <>
            {props.productShow.map((task) => (
                <CardProduct key={task.id} id={task.id} productName={task.title} price={task.price} img={task.image} class={task.class}/>
            ))}
        </>
        
    )
}