import { Component, OnInit } from '@angular/core';
import { plan } from '../../Interfaces/info-gral';
import { InfoGeneralService } from '../../services/info-general.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  planes: plan[];

  constructor(private infoSer: InfoGeneralService) { }

  ngOnInit() {
    this.infoSer.getPlanes().subscribe(data => this.planes = data);
    console.log(this.planes);
  }

}
