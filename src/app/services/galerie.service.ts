import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GalerieModele } from '../modele/galerie-modele';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {

  images:Array<GalerieModele>;

  constructor(private http:HttpClient) {
    this.getGalerie();
  }

  getGalerie(){
    this.http.get<Array<GalerieModele>>('assets/data/galerie.json').subscribe(
      data =>  {
        this.images = data;
      }
    );
  }
}
