import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.css']
})
export class PortafolioItemComponent implements OnInit {

  constructor(public proyectService: ProyectoService,
              private router: Router) { }

  ngOnInit() {
    if(!this.proyectService.currentProyect){
      this.router.navigateByUrl('/home')
    }
  }

}
