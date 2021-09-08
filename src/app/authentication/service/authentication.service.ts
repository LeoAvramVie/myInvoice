import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Du bist eingeloggt');
        this.router.navigateByUrl('/profile')
      })
      .catch(err => {
        console.log('Fehler beim einloggen', err.message);
      })
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Erfolgreich registriert', value)
        this.router.navigateByUrl('/profile')
      })
      .catch(error => {
        console.log('Fehler beim registrieren', error)
      })
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
        // console.log('Erfolgreich mit Google angemeldet', value),
          this.router.navigateByUrl('/profile');
      })
      .catch(error => {
        console.log('Fehler beim anmelden mit Google ', error)
      })
  }

  logout(){
    this.afAuth.signOut().then(()=>{
      this.router.navigate(['/']);
    })
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.signInWithPopup(provider);
  }

}

