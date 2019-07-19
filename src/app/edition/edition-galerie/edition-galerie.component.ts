import { Component, OnInit } from '@angular/core';
import { GalerieService } from 'src/app/services/galerie.service';
import { GalerieModele, Image } from 'src/app/modele/galerie-modele';

@Component({
  selector: 'app-edition-galerie',
  templateUrl: './edition-galerie.component.html',
  styleUrls: ['./edition-galerie.component.css']
})
export class EditionGalerieComponent implements OnInit {

  image:GalerieModele;
  n:number;

  constructor(public galServ:GalerieService) { }

  ngOnInit() {
    this.image = new Image();
  }

  setImage(){
    console.log(this.n);
    // Attribution d'une nouvelle actualité
    this.image = this.galServ.images[this.n];
  }

  go(){
    console.log(this.n);
    // Attribution d'une nouvelle actualité
    this.galServ.images[this.n] = this.image;
  }
}
