import { CardContainer } from "../features/CardContainer";

export function Products() {

    return (
        <main>
            <section className="presentation">
                <img className="principal-img" src="assets/img/presentacion.png" alt="Eter3D" />
                <h1>Diseñamos en 3D lo que imaginás</h1>
            </section>
            <section>
                <CardContainer category="animales" textH2="Animales de Juguete" classH2="seccion" classImg="none" classButton="none"/>
                <CardContainer category="juguetes" textH2="Juguetes" classH2="seccion" classImg="none" classButton="none"/>
                <CardContainer category="fundas" textH2="Fundas en Plastico" classH2="seccion" classImg="none" classButton="none"/>
                
                
                
            </section>
        </main>
    )
}