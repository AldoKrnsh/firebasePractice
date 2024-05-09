import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { personaModel } from './persona.model';
import * as firebase from "firebase/app"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {


  constructor(private data: DataService) { }

    ngOnInit(): void {
      firebase.initializeApp({
        apiKey: "AIzaSyA7AxbCnh86J2hL4dmx-H9QRjYojIoPR5M",
        authDomain: "auth-practice-8ff0a.firebaseapp.com",
      })
    }

}


