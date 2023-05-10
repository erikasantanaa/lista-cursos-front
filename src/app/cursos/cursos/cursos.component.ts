import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/cursos/model/curso';
import { CursosService } from '../services/cursos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})

export class CursosComponent implements OnInit {

  cursos: Observable<Curso[]>;

  displayedColumns = ['nome', 'categoria'];

  constructor( private cursosService: CursosService) {}

  ngOnInit(): void {

  }
}
