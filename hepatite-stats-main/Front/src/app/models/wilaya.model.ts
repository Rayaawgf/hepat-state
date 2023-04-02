import { Commune } from './commune.model';


export class Wilaya {
  code: string;
  nom: string;
  urlToBack: string;
  communes : Commune[];

  constructor(code: string, nom: string,urlToBack:string,communes:Commune[]) {
    this.code = code;
    this.nom = nom;
    this.urlToBack = urlToBack;
    this.communes = communes;
  }
}
