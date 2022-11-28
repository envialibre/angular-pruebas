import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>

<h3> L base es: <strong> {{base}} </strong></h3>


<button (click)="acumular(+base)"> + 1</button>
<span> {{ num }} </span>
<button (click)="acumular(-base)"> - 1</button>

    `
})
export class ContadorComponent{

    title: string = 'Contador App';
    num: number = 10;
    base: number = 5;
    acumular( valor:number ){
  
      this.num += valor;
  
    }
    

}