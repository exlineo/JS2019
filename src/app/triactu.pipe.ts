import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triactu'
})
export class TriactuPipe implements PipeTransform {

  transform(values: any[], filtre?: string): any {
    if(!values || !values.length) return [];
    if(!filtre || !filtre.length) return values;

    return values.filter(
      v => {
        if(v.titre.toLowerCase().indexOf(filtre.toLowerCase()) > -1){
          return v;
        }
      }
    );
  }
}

@Pipe({
  name: 'tritableau'
})
export class TriTableauPipe implements PipeTransform {

  transform(values: any[], filtre?: string): any {
    if(!values || !values.length) return [];
    if(!filtre || !filtre.length) return values;

    return values.filter(
      v => {
        if(v.toLowerCase().indexOf(filtre.toLowerCase()) > -1){
          return v;
        }
      }
    );
  }
}


