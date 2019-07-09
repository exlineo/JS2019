import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActuModele, Actu } from '../modele/actu-modele';

@Injectable({
  providedIn: 'root'
})
export class DataActuService {

  bienvenue:string;
  titre:string;

  accueilActus:Array<ActuModele>;

  constructor(private http:HttpClient) {
    this.titre = "Application Angular pour les JS";
    this.bienvenue = "Bienvenue Homme";

    this.getAccueil();
  }

  getAccueil(){
    this.http.get<Array<ActuModele>>('assets/data/accueil.json')
    .subscribe(
      donnees => {
        console.log(donnees);
        this.accueilActus = donnees;
      }
    );
  }
}
