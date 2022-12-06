import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css'],
})
export class PersonaAltaComponent implements OnInit {
  @ViewChild('formulario') formulario: NgForm;
  persona: Persona;
  @Output() onGuardar = new EventEmitter();
  @Output() onCancelar = new EventEmitter();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.persona = new Persona();
  }

  guardar() {
    this.personaService.postPersona(this.persona);
    this.onGuardar.emit();
  }

  cancelar() {
    this.onCancelar.emit();
  }
}
