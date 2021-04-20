import { Component, VERSION } from "@angular/core";
import { Estudiante, Facultad } from "../../model/Modelos";

@Component({
  selector: "my-estudiante",
  templateUrl: "./estudiante.component.html",
  styleUrls: ["./estudiante.component.css"]
})
export class EstudianteComponent {
  // Variable usada para capturar datos del formulario.
  estudiante: Estudiante = new Estudiante();

  // Variable usada para almacenar los estudiantes capturados desde el formulario.
  estudiantes: Estudiante[] = [];

  guardar() {
    var newEstudiante = JSON.parse(JSON.stringify(this.estudiante));
    this.estudiantes.push(newEstudiante);
    this.estudiante = new Estudiante();
  }
}
