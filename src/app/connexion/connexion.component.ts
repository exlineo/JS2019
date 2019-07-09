import { Component, OnInit } from '@angular/core';
import { UserModele } from '../modele/i-user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexion:UserModele;

  constructor() { }

  ngOnInit() {
    this.connexion = {
      id:"Arsen",
      mdp:""
    }
  }
  // envoyer le formulaire avec la méthode submit
  envoieForm(){
    console.log("Le formulaire est envoyé");
  }

  // récupérer en direct un champ input
  traceInput(){
    console.log(this.connexion);
  }
}
