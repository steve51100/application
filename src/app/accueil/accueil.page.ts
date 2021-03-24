import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {MissionDataModel} from "../models/MissionDataModel";
import {MissionDataService} from "../services/mission-data.service";
import {Observable} from "rxjs";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage {

  missions:Observable<MissionDataModel[]>;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private missionDataService:MissionDataService,
    public alertController: AlertController
  ) { }

  // Récupérer la liste des missions quand on entre dans la peg
  ngOnInit(){
    this.missions = this.missionDataService.getMissions();
  }

  // Supprimer une mission
  async supprimerMission(mission){
    const alert = await this.alertController.create({
      header: 'Suppression de mission',
      message: 'Êtes vous sûr de vouloir supprimer cette mission ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Supprimer',
          handler: () => {
            this.missionDataService.deleteMission(mission.id)
          }
        }
      ]
    });

    await alert.present();
  }

  signOut(){
    this.afAuth.signOut();
    this.router.navigateByUrl('/connection')
  }
}
