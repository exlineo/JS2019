import { Component, OnInit } from '@angular/core';
import { DataActuService } from '../services/data-actu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public data:DataActuService) { }

  ngOnInit() {
  }

}
