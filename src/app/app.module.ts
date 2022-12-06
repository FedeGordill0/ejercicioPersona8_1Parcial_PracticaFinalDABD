import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [AppComponent, PersonaAltaComponent, PersonaListadoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
