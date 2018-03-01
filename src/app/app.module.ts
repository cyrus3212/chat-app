import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

var config = {
    apiKey: "AIzaSyBPf4dpTtMBCUa639F2nzfg56YZp0k2xaM",
    authDomain: "chat-app-682c6.firebaseapp.com",
    databaseURL: "https://chat-app-682c6.firebaseio.com",
    projectId: "chat-app-682c6",
    storageBucket: "",
    messagingSenderId: "122477007076"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
