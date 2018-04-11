import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';
import { AlumnoAdo } from '../../interfaces/alumno.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private _servicio:PruebaService) { }

  alumnos:AlumnoAdo[]=[];

  ngOnInit() {

    this._servicio.getTodos().subscribe(data=>{ this.alumnos = data });
  }

  eliminar(id:string, indice:number)
  {
    this._servicio.borrar(id).subscribe(r=>{
      if(r)
        {
          console.log(r);
        }
        else
        {

          for (var i =0; i < this.alumnos.length; i++)
            if (this.alumnos[i].Id === id) {
              this.alumnos.splice(i,1);
               break;
            }

        }
    });
  }
}
