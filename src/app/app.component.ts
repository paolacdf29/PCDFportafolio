import { Component } from '@angular/core';
import { InfoGeneralService } from './services/info-general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor(public infoService: InfoGeneralService){}
}
