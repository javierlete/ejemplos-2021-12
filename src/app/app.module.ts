import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    PieDePaginaComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
