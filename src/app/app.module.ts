import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioItemComponent } from './pages/portafolio-item/portafolio-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactoComponent } from './pages/contacto/contacto.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent,
    FiltroPipe,
    ServiciosComponent,
    AdminComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FiltroPipe]
})
export class AppModule { }
