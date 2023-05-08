import { Injectable } from '@angular/core';
import { Curso } from '../models/cursos/model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  list(): Curso[] {
    return [
      { _id: '1', nome: 'Erika', categoria: 'Angular'}
    ]
  }
}
