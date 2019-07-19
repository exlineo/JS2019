import { Component, OnInit } from '@angular/core';
import { DataActuService } from 'src/app/services/data-actu.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {
  
  n:number;

  constructor(public dataServ:DataActuService) { }

  ngOnInit() {
  }

}
