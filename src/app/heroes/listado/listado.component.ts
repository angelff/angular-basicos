import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','IronMan','Hulk','Thor'];
  heroeBorrado: string = '';

  borrarHeroe():void
  {
    this.heroeBorrado = this.heroes.shift() || '';
  }

  anadirHeroe():void
  {
    this.heroes.push('Héroe Ficticio');
  }

  reset():void
  {
    this.heroes = ['Spiderman','IronMan','Hulk','Thor'];
    this.heroeBorrado = ''
  }
}
