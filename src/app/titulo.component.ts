import { Component } from "@angular/core";

@Component({
  selector: 'app-titulo',
  template: '<h1>{{titulo}}</h1>',
  styles: [ 'h1 { font-size: 4em; }' ]
})
export class TituloComponent {
  titulo = 'Mi Super Título';
}
