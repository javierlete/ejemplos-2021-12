import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {
  anyo = 2022;
  autor = 'Ipartek';

  constructor() { }

  ngOnInit(): void {
  }

}
