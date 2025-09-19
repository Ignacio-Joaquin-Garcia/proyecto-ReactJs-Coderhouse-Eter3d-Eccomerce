export function ColourCard(props){

    return(
        <div className="color-card">
            <h3>{props.colorName}</h3>
            <img src={props.colorImage} alt="Imagen del Color" />
        </div>
    )
}