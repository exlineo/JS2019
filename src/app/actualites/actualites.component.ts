import { Component, OnInit } from '@angular/core';
import { DataActuService } from '../services/data-actu.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  filtrage:string;
  adr_rest:string = environment.ADR_REST;

  constructor(public data:DataActuService) { }

  ngOnInit() {
  }

}
