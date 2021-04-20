import {Component, VERSION} from '@angular/core';
import {Profesor, Facultad} from '../../model/Modelos';

@Component({
     selector: "my-porofessor",
     templateUrl: "./profesores.component.html",
     styleUrls: ["./profesores.component.css"],
})

export class ProfesorComponent{
     profesor: Profesor = new Profesor();

     profesores: Profesor[] = [];

     save() {
          var newProfesor = JSON.parse(JSON.stringify(this.profesor));
          this.profesores.push(newProfesor);
          this.profesor = new Profesor();
     }
}