import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  token:string;

  constructor() {
    this.token = "SpiderManEstTresOccupeIlneViendraPasNousEmbeterDansLaSalleDeCours";
  }
}
