import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'formulaire', component:FormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionRoutingModule { }
