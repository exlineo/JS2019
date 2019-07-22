import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActuModele, Actu } from '../modele/actu-modele';
import { environment } from '../../environments/environment';


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
  /**
   * Récupération des actualités from the serveur
   */
  getAccueil(){
    // this.http.get<Array<ActuModele>>('assets/data/accueil.json')
    this.http.get<Array<ActuModele>>(environment.ADR_REST+'/nouvelles')
    .subscribe(
      donnees => {
        console.log(donnees);
        this.accueilActus = donnees;
      }
    );
  }

  /**
   * 
   * @param t Titre de l'actualité que nous recherchons
   */
  getActu(t):ActuModele {
    for(let joceline of this.accueilActus){
      if(joceline.titre && joceline.titre == t){
        return joceline;
      }
    }
    return null;
  }
}
