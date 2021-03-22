import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
  ) { }

  signOut(){
    this.afAuth.signOut();
    this.router.navigateByUrl('/connection')
  };
}
