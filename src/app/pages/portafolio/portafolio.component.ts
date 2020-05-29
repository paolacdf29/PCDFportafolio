import { Component, OnInit } from '@angular/core';
import { proyectos } from '../../Interfaces/info-gral';
import { Observable } from 'rxjs';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  items: Observable <proyectos[]>;
  cargando = true;

  constructor(public proyectoService: ProyectoService) { }

  ngOnInit() {
    this.items = this.proyectoService.getitems();
    setTimeout(()=>{

      this.cargando = false;
    }, 2000);
  }

  setThisItem(item: proyectos){
    this.proyectoService.setProyect(item);
  }
}
