import { Component } from '@angular/core';
import { Persona } from './models/persona';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejercicioPersona8';
  listadoPersonas: Persona[] = [];
  formVisible: boolean = false;

  constructor(private personaService: PersonaService) {}

  mostrarFormulario(visible: boolean) {
    this.formVisible = visible;
  }

  actualizarListado() {
    this.listadoPersonas = this.personaService.getListadoPersonas();
    this.mostrarFormulario(false);
  }
}
