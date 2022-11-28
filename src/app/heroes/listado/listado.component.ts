import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'hulk', 'Thor', 'Superman', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
    const heroborrado = this.heroes.shift() || '';
    this.heroeBorrado = heroborrado;
    console.log(heroborrado);

  }
}
