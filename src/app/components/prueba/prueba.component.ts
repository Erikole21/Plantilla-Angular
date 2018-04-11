import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoAdo } from '../../interfaces/alumno.interface';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html'
})
export class PruebaComponent implements OnInit {

  constructor(private _servicio:PruebaService,
              private activeRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {

    this._servicio.getCarreras().subscribe(data=>{
      this.carreras=data;
      console.log(this.carreras);
    });

    this.activeRoute.params.subscribe(param=>{
        if (param['id'] != 'nuevo') {
          this._servicio.get(param['id']).subscribe(data=>{
            this.alumno= data;
            console.log(this.alumno);
            this.nuevo=false;
            this.id = param['id'];
          });
        }
    });

  }

  nuevo:boolean=true;
  id:string;

  alumno:AlumnoAdo={
    Id:null,
    NumeroCedula:null,
    Nombre:null,
    PrimerApellido:null,
    SegundoApellido:null,
    IdCarrera:null,
    NombreCarrera:null
  };

  carreras:any[]=[];

  guardar()
  {
      if (this.nuevo) {

        this._servicio.agregar(this.alumno).subscribe(data=>{
            this.router.navigate(['home']);
        });

      } else {

        this._servicio.editar(this.alumno,this.id).subscribe(data=>{
          this.router.navigate(['home']);
      });
      }
  }

}
