import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [//Lista de componentes por ejemplo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [//Indica que quiero hacer visible fuera del modulo
        ListadoComponent
    ],
    imports: [ //Importamos modulos externos dentro del presente modulo
        CommonModule // Contiene las directivas ngfor, ngif, etc...
    ]
})
export class HeroesModule {

}