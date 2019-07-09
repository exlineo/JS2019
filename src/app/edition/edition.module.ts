import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { EditionRoutingModule } from './edition-routing.module';
import { EditionGalerieComponent } from './edition-galerie/edition-galerie.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccueilComponent,
    FormulaireComponent,
    EditionGalerieComponent,
    ActualitesComponent],
  imports: [
    CommonModule,
    EditionRoutingModule,
    FormsModule
  ]
})
export class EditionModule { }
