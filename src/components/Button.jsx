
//ClassNames posibles: links(color azul), reactivo50(color naranja semitransparente)
export function Button(props){

    return(
        <button className={props.className} type={props.type} onClick={props.onClick}>
            {props.text}
            {props.children}
        </button>
    )
}