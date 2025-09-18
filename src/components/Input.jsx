export function Input(props){

    return(
        <input id={props.id} type={props.type} placeholder={props.placeholder} className={props.className} value={props.value} defaultValue={props.defaultValue} required onChange={props.onChange}/>
    )
}