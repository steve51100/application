import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage {

  dataUser = {
    email: '',
    password: ''
  };
  connected: boolean;


  constructor(
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private router: Router,
  ) {
   
   }

  login(){
    console.log('email:' + this.dataUser.email);
    console.log( 'password' +this.dataUser.password);

    this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
    .then(auth => {
      console.log('utilisateur connecté');
      this.router.navigateByUrl('/accueil');
      this.dataUser.email = '';
      this.dataUser.password = '';
    })
    .catch(err => {
      console.log('Erreur: ' + err);
      this.errorMail();
      this.dataUser.email = '';
      this.dataUser.password = '';
    });
  }


  async errorMail() {
    const toast = await this.toastController.create({
      message: 'Email ou mot de passe incorrect',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
