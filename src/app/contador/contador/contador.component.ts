import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})
export class ContadorComponent {
    title : string = 'Contador APP';
    numero: number = 0;
    base  : number = 5;
  
    sumar(){
      this.numero+=1;
    }
  
    restar(){
      this.numero-=1;
    }
  
    acumular(valor: number){
      this.numero +=valor;
    }
}