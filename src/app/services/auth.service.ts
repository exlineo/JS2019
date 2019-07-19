import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authentifie:boolean;

  constructor() {
    this.authentifie = false;
  }

  setAuth(statut){
    this.authentifie = statut;
    sessionStorage.setItem('auth', statut.toString());
  }

  getAuth():boolean{
    return eval(sessionStorage.getItem('auth'));
  }
}
