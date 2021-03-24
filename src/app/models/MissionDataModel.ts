import {TacheDataModel} from "./TacheDataModel";

export class MissionDataModel {

  id?:string;
  entreprise:string;
  titre:string;
  taches:TacheDataModel[];


  constructor(entreprise:string = "",nom:string = "",taches:TacheDataModel[] = []) {
    this.entreprise = entreprise;
    this.titre = nom ;
    this.taches = taches;
  }

}
