import {TacheDataModel} from "./TacheDataModel";

export class MissionDataModel {

  id?:string;
  entreprise:string;
  titre:string;
  date:string;
  taches:TacheDataModel[];


  constructor(entreprise:string = "",nom:string = "",date:string = "",taches:TacheDataModel[] = []) {
    this.entreprise = entreprise;
    this.titre = nom ;
    this.date = date ;
    this.taches = taches;
  }

}
