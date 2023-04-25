import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/cursos/model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})

export class CursosComponent implements OnInit {
  cursos: Curso[] = [
    { _id: '1', nome: 'Erika', categoria: 'Angular'}
  ];

  colunasExibidas: ['nome', 'categoria'];

  constructor() {}

  ngOnInit(): void {

  }
}
