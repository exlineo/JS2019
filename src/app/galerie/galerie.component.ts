import { Component, OnInit } from '@angular/core';
import { GalerieService } from '../services/galerie.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  constructor(public galerieServ:GalerieService) { }

  ngOnInit() {
  }

}
