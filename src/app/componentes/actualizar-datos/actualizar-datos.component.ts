import { Component, OnInit } from '@angular/core';
import { ActualizacionDatosService } from '../../servicios/actualizacion-datos.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.css']
})
export class ActualizarDatosComponent implements OnInit {

  respuestaAsincrona:any;

  constructor(public actualizacionDatosService:ActualizacionDatosService) { }

  ngOnInit() {
  }

  dataCollection(){
    this.respuestaAsincrona = new Promise((resolve,reject)=>{
      this.actualizacionDatosService.getDataCol().subscribe(
        respuesta=>{
          console.log(respuesta);
          resolve(respuesta);
        }
      )
    })
  }
  dataMining(){
    this.respuestaAsincrona = new Promise((resolve,reject)=>{
      this.actualizacionDatosService.getDataMin().subscribe(
        respuesta=>{
          console.log(respuesta);
          resolve(respuesta);
        }
      )
    })
  }
  parser(){
    this.respuestaAsincrona = new Promise((resolve,reject)=>{
      this.actualizacionDatosService.getParseo().subscribe(
        respuesta=>{
          console.log(respuesta);
          resolve(respuesta);
        }
      )
    })
  }

}
