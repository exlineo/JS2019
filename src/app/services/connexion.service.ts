import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http:HttpClient, public auth:AuthService) {
  }

  getStrapiConnexion(id, mdp){
    this.http.post(environment.ADR_REST+'/auth/local', {identifier:id, password:mdp})
    .subscribe(
      data => {
        console.log(data);
        if(data['jwt']){
          this.auth.authentifie = true;
          this.auth.token = data['jwt'];
        }
      }
    );
  }
}
