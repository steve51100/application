import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage{
  nom: string;
  prenom: string;
  fonction: string;
  email: string;
  telephone: string;
  contacts = []

  constructor(private navController: NavController,public afDB: AngularFireDatabase) {
    this.getContact();
   }

  getContact() {
    this.afDB.list('contact/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.contacts = [];
      actions.forEach(action => {
        console.log('nom:' + action.payload.exportVal().nom );
        console.log('prenom:' + action.payload.exportVal().prenom );
        console.log('fonction:' + action.payload.exportVal().fonction );
        console.log(' email:' + action.payload.exportVal(). email );
        console.log('telephone:' + action.payload.exportVal().telephone );
        
        this.contacts.push({
          key: action.key,
          nom: action.payload.exportVal().nom,
          prenom: action.payload.exportVal().prenom,
          fonction: action.payload.exportVal().fonction,
          email: action.payload.exportVal().email,
          telephone: action.payload.exportVal().telephone
        });
      });
    });
  }

  navigateBack(){
    this.navController.back();
  }

  deleteContact(contact: any){
    this.afDB.list('contact/').remove(contact.key);
  }
}
