import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EstudianteComponent } from "./estudiantes/estudiante.component";
import {ProfesorComponent} from './profesores/profesores.component'

import { RouterModule } from "@angular/router";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, EstudianteComponent, ProfesorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
