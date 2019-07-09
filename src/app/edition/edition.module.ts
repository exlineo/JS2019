import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { EditionRoutingModule } from './edition-routing.module';

@NgModule({
  declarations: [AccueilComponent, FormulaireComponent],
  imports: [
    CommonModule,
    EditionRoutingModule
  ]
})
export class EditionModule { }
