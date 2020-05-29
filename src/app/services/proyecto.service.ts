import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { proyectos } from '../Interfaces/info-gral';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  currentProyect: proyectos;
  txtBusqueda: string = '';

  constructor(private http: HttpClient) { }

  getitems(){
    return this.http.get<proyectos[]>('https://portafolio-angular-98185.firebaseio.com/proyectos.json')
  }

  setProyect(item: proyectos){
    this.currentProyect = item;
    console.log(this.currentProyect)
  }
}
