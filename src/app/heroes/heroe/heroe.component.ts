import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string  = 'IronMan';
    edad: number    = 43;
    
    getNombreCapitalizado(): string
    {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string
    {
       return this.nombre + ' - '+this.edad; 
       //return `${this.nombre} - ${this.edad}`; 
    }

    cambiarNombre():void
    {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void
    {
        this.edad = 27;
    }

    reset():void
    {
        this.nombre  = 'IronMan';
        this.edad    = 43;
    }
}