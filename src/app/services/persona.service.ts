import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable()
export class PersonaService {
  listadoPersonas: Persona[] = [];

  constructor() {}

  getListadoPersonas() {
    return this.listadoPersonas;
  }

  postPersona(persona: Persona) {
    this.listadoPersonas.push(persona);
  }

  deletePersona(persona: Persona) {
    this.listadoPersonas.splice(
      this.listadoPersonas.findIndex((x) => x === persona),
      1
    );
  }
}
