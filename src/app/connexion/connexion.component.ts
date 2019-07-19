import { Component, OnInit } from '@angular/core';
import { UserModele } from '../modele/i-user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexion:UserModele;

  constructor(public auth:AuthService) { }

  ngOnInit() {
    this.connexion = {
      id:"Arsen",
      mdp:""
    }
  }
  // envoyer le formulaire avec la méthode submit
  envoieForm(){
    console.log("Le formulaire est envoyé");
    this.auth.authentifie = true;
  }

  deconne(){
    this.auth.authentifie = false;
  }
  // récupérer en direct un champ input
  traceInput(){
    console.log(this.connexion);
  }
}
