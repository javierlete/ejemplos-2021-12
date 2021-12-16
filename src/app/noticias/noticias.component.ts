import { Component, OnInit } from '@angular/core';
import { NOTICIAS } from './mock-noticias';
import { Noticia } from './noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  noticias: Noticia[] = NOTICIAS;
}
