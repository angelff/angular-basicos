import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [ //Importamos modulos externos dentro del presente modulo
        CommonModule // Contiene las directivas ngfor, ngif, etc...
    ]
})
export class ContadorModule{}