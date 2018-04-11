import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'
import { AlumnoAdo } from '../interfaces/alumno.interface';


@Injectable()
export class PruebaService {

  constructor(private http:Http) { }

  urlServicio:string='http://localhost:54879/Api/alumno/';

  getTodos()
  {
    return this.http.get(`${this.urlServicio}get`).map(data=>{
      return data.json();
    })
  }

  get(id:string)
  {
    return this.http.get(`${this.urlServicio}get/${id}`).map(data=>{
      return data.json();
    })
  }

  getCarreras()
  {
    return this.http.get(`${this.urlServicio}carreras`).map(data=>{
      return data.json();
    })
  }

  agregar(alumno:AlumnoAdo)
  {
    let body=JSON.stringify(alumno);
    let urlCrear=`${this.urlServicio}Post`
    let headers:Headers =new Headers({'Content-type':'application/json'});
    return this.http.post(urlCrear,body,{ headers }).map(retorno=>{
        return retorno.json();
    });
  }

  editar(alumno:AlumnoAdo, id:string)
  {

    let body=JSON.stringify(alumno);
    let urlCrear=`${this.urlServicio}Put/${id}`
    let headers:Headers =new Headers({'Content-type':'application/json'});
    return this.http.put(urlCrear,body,{ headers }).map(retorno=>{
        return retorno.json();
    });
  }

  borrar(id:string)
  {
    let urlBorrar=`${this.urlServicio}delete/${id}`
    let headers:Headers =new Headers({'Content-type':'application/json'});
    return this.http.delete(urlBorrar,{ headers, withCredentials:false }).map(retorno=>{
      return retorno.json();
    });
  }

}
