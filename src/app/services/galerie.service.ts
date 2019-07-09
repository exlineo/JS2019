import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {

  images:Array<object>;

  constructor(private http:HttpClient) {
    this.getGalerie();
  }

  getGalerie(){
    this.http.get<Array<object>>('assets/data/galerie.json').subscribe(
      data =>  {
        this.images = data;
      }
    );
  }
}
