import { Component, OnInit } from '@angular/core';
import { InfoGeneralService } from '../../services/info-general.service';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoService: InfoGeneralService,
              private proyectoService: ProyectoService) { }

  ngOnInit() {
  }

  buscame(evento){
    this.proyectoService.txtBusqueda = evento.target.value
  }

}
