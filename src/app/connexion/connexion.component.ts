import { Component, OnInit } from '@angular/core';
import { UserModele } from '../modele/i-user';
import { AuthService } from '../services/auth.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexion:UserModele;

  constructor(public auth:AuthService, public conne:ConnexionService) { }

  ngOnInit() {
    this.connexion = {
      id:"Arsen",
      mdp:""
    }
  }
  // envoyer le formulaire avec la méthode submit
  envoieForm(){
    console.log("Le formulaire est envoyé");
    this.conne.getStrapiConnexion(this.connexion.id, this.connexion.mdp);
  }

  deconne(){
    this.auth.token = null;
    this.auth.authentifie = false;
  }
  // récupérer en direct un champ input
  traceInput(){
    console.log(this.connexion);
  }
}
