import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina, proyectos, person } from '../Interfaces/info-gral';

@Injectable({
  providedIn: 'root'
})
export class InfoGeneralService {

  info: infoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) { 
    this.getinfo();
  }

  getinfo(){
    this.http.get('https://portafolio-angular-98185.firebaseio.com/person/0.json')
      .subscribe(resp =>{
        this.info = resp;
        this.cargada = true;
      })
  }

  getPerson() {
    return new Promise<person>(resolve =>{
      this.http.get('https://portafolio-angular-98185.firebaseio.com/person/1.json')
        .subscribe((resp: person) =>{
          resolve(resp);
        })
    })
  }
}
