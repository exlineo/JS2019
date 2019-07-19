import { Component, OnInit } from '@angular/core';
import { DataActuService } from '../services/data-actu.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  debutPagination:number = 0;
  ecartPagination:number = 4;

  constructor(public data:DataActuService) { }

  ngOnInit() {
  }

  pagination(np:number){
    this.debutPagination += np;
  }

}
