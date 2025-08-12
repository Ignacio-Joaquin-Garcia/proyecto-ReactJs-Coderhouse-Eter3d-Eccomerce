export function Input(props){

    return(
        <input id={props.id} type={props.type} placeholder={props.placeholder} className={props.className} required onChange={props.onChange}/>
    )
}