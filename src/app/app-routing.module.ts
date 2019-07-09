import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'actualites', component:ActualitesComponent},
  {path:'galerie', component:GalerieComponent},
  {path:'connexion', component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
