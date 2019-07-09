import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ConnexionComponent } from './connexion/connexion.component';

import { DataActuService } from './services/data-actu.service';
import { GalerieService } from './services/galerie.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    PiedComponent,
    ActualitesComponent,
    GalerieComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataActuService, GalerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
