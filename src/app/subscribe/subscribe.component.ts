import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
  providers: [DatePipe]
})
export class SubscribeComponent implements OnInit {
  subscribeForm: FormGroup;
  subscribeObj = {
    subscribe_name: 'I',
    subscribe_phonenumber: '987654321'
  };

  constructor(private angularFireAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.subscribeForm = this.formBuilder.group({
      subscribe_name: ['', Validators.required],
      subscribe_phonenumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9 ]*")]]
    });
  }

  subscribe() {
    const loginMethod = new firebase.auth.GoogleAuthProvider();
    let date;
    this.angularFireAuth.auth.signInWithPopup(loginMethod).then((res) => {
      console.log(res);
      this.subscribeObj['displayName'] = res.user.displayName;
      this.subscribeObj['email'] = res.user.email;
      this.subscribeObj['phoneNumber'] = res.user.phoneNumber;
      this.subscribeObj['photoURL'] = res.user.photoURL;
      date = Date.now();
      this.subscribeObj['date'] = date;
      this.subscribeObj['dateNowISO'] = this.datePipe.transform(date, 'EEEE, MMMM d, y, h:mm:ss a zzzz');
      this.subscribeObj['dateNowMilliseconds'] = formatDate(date, 'dd/MM/yyyy, h:mm a', 'en');
      this.saveSubscribers();
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    });
  }

  saveSubscribers() {
    this.angularFirestore.collection('subscribers').add(this.subscribeObj).then((res) => {
      this.logout();
      alert('Token Id - ' + res.id);
    });
  }

  logout() {
    this.angularFireAuth.auth.signOut().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  get f() { return this.subscribeForm.controls; }

}
