import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EditionGalerieComponent } from './edition-galerie/edition-galerie.component';
import { ActualitesComponent } from './actualites/actualites.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, children:[
    {path:'galerie', component:EditionGalerieComponent},
    {path:'actualites', component:ActualitesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionRoutingModule { }
