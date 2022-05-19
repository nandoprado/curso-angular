import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dgz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',  
})
export class AgregarComponent{    
  
  @Input('data') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService:DbzService) {}
  
  agregar(){    
    this.dbzService.agregarPersonaje(this.nuevo);
  }
}
