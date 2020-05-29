import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/Interfaces/info-gral';
import { InfoGeneralService } from '../../services/info-general.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  persona: person;

  constructor(private infoService: InfoGeneralService) { }

  async ngOnInit() {
    this.persona = await this.infoService.getPerson();
  }

}
