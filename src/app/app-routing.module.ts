import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionGuard } from './edition.guard';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'actualites', component:ActualitesComponent},
  {path:'galerie', component:GalerieComponent},
  {path:'edition', loadChildren:"./edition/edition.module#EditionModule", canActivate:[EditionGuard], canLoad:[EditionGuard]},
  {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
  {path:'connexion', component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
