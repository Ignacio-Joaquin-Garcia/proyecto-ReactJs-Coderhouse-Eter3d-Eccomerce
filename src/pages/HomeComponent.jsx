import { CardContainer } from '../features/CardContainer';
import { CustomOrder } from '../features/CustomOrder';

import { Presentation } from '../static/Presentation';
import { Deliveries } from '../static/Deliveries';

export function HomeComponent() {

    return (
        <main>
            <Presentation/>
            <CardContainer textH2="Nuestros Productos Destacados" classButton="links"/>
            <Deliveries/>
            <CustomOrder/>
        </main>
    )
}


