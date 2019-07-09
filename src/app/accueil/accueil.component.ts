import { Component, OnInit } from '@angular/core';
import { DataActuService } from '../services/data-actu.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public data:DataActuService) { }

  ngOnInit() {
  }

}
