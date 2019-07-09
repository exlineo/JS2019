export interface ActuModele {
    _id?:string | number;
    titre:string;
    intro:string;
    description:string;
    imgIntro?:string;
    imgDescription?:string;
}

export class Actu implements ActuModele{
    _id?:string | number;
    titre:string;
    intro:string;
    description:string;
    imgIntro?:string;
    imgDescription?:string;
}