import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {MissionDataModel} from "../models/MissionDataModel";
import { ToastController } from '@ionic/angular';
import {MissionDataService} from "../services/mission-data.service";
import {TacheDataModel} from "../models/TacheDataModel";

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage {

  newTache:TacheDataModel = {
    nom:'',
    termine:false
  };
  mission:MissionDataModel = new MissionDataModel();

  constructor(public toastController: ToastController, private missionDataService:MissionDataService) {

  }

 addTache(){
   if(this.newTache.nom == ''){
     this.presentToast("Veuillez entrer le nom de la tache");
     return;
   }
   this.mission.taches.push(this.newTache);
   this.newTache = {
     nom:'',
     termine:false
   };
 }

  supprimerTache(tache){
   this.mission.taches = this.mission.taches.filter(t => t != tache);
  }

  saveMission(){
    // Afficher un message si l'utilisateur n'a pas tout rempli
    if(!this.missionDataService.validateMission(this.mission)){
      this.presentToast("Veuillez entrer tous les champs de la mission")
      return;
    }

    // Ajouter la mission dans la base de donnés
    this.missionDataService.addMission(this.mission).then(()=>{
      // Reinitialiser la mission
      this.mission = new MissionDataModel();

      //Afficher un message
      this.presentToast("Mission ajoutée")
    });

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
