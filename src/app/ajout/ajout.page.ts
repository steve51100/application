import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage {
   nom: string;
   prenom: string;
   fonction: string;
   email: string;
   telephone: string;


 constructor(
   public afDB: AngularFireDatabase
 ){

 }
  
 addContactToFirebase(){
   console.log('nom:' + this.nom);
   console.log('prenom:' + this.prenom);
   console.log('fonct:' +this.email);
   console.log(('tel:' +this.telephone));
   this.afDB.list('Contact').push({
     nom: this.nom,
     prenom: this.prenom,
     fonction: this.fonction,
     email: this.email,
     telephone: this.telephone
   });
   this.nom = '';
   this.prenom = '';
   this.email = '';
   this.fonction = '';
   this.telephone = '';
   
 }

}
