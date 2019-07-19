import { Component, OnInit } from '@angular/core';
import { DataActuService } from '../services/data-actu.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  filtrage:string;

  constructor(public data:DataActuService) { }

  ngOnInit() {
  }

}
