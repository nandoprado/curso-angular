import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent{
  heroes:string[]=['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado:string = '';
  
  borrarHeroe():void{
    console.log("Borrando héroe")
    this.heroeBorrado = this.heroes.shift() || '';    
  }
}
