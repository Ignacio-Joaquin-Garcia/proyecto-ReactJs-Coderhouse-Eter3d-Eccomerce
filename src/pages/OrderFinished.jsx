export function OrderFinished(props) {

    return (
        <section className={"order-fulfilled "+props.className}>
            <section className="order-finished">
                <h2>Orden Finalizada con Exito</h2>
                <p>Numero de Encargo: <span className="order-id">{props.numeroEncargo}</span></p>
                <p className="order-contact">Nos contactaremos contigo pronto!</p>
            </section>
        </section>
    )
}