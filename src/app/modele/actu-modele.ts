import { Auteur } from './auteur';

export interface ActuModele {
    _id?:string | number;
    titre:string;
    intro:string;
    description:string;
    imgIntro?:string;
    imgDescription?:string;
    auteur?:Auteur;
}

export class Actu implements ActuModele{
    _id?:string | number;
    titre:string;
    intro:string;
    description:string;
    imgIntro?:string;
    imgDescription?:string;
}