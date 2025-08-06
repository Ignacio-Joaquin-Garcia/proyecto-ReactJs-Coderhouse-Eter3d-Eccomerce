export function Button(props){

    return(
        <button className={props.className} onClick={props.onClick}>
            {props.text}
        </button>
    )
}