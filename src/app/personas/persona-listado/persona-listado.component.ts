import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css'],
})
export class PersonaListadoComponent implements OnInit {
  @Input() listadoPersonas: Persona[] = [];
  formVisible: boolean = false;
  persona: Persona;
  @Output() onMostrar = new EventEmitter();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.persona = new Persona();
  }

  mostrarFormulario() {
    this.onMostrar.emit();
  }

  eliminarPersona(persona: Persona) {
    this.personaService.deletePersona(persona);
  }
}
