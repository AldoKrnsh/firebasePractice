import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from "firebase/auth";

@Injectable()
export class LoginService {
    token: string;

    constructor(private router: Router) { }

    login(email: string, password: string) {
        const auth = firebase.getAuth();
        firebase.signInWithEmailAndPassword(auth, email, password).then(response => {
            firebase.getAuth().currentUser?.getIdToken().then(token => {
                console.log(token);
                this.token = token;
                this.router.navigate(['/personas']);
            })
        })
    }

    getIdToken() {
        return this.token;
    }
}