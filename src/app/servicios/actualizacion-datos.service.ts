import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualizacionDatosService {

  constructor(public httpClient:HttpClient) {
  console.log('Ejecutandose el servicio')}

  getDataCol(){
    let url='http://localhost:8080/data-collection';
    return this.httpClient.get(url);
  }
  getDataMin(){
      let url='http://localhost:8080/data-mining';
      return this.httpClient.get(url);
    }
    getParseo(){
      let url='http://localhost:8080/parser';
      return this.httpClient.get(url);
    }

}
