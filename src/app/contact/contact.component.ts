import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [DatePipe]
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
  contactObj = {
    msg_subject: '',
    message: ''
  };
  constructor(private angularFireAuth: AngularFireAuth, private formBuilder: FormBuilder,
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      msg_subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  sendMessage() {
    const loginMethod = new firebase.auth.GoogleAuthProvider();
    let date;
    this.angularFireAuth.auth.signInWithPopup(loginMethod).then((res) => {
      console.log(res);
      this.contactObj['displayName'] = res.user.displayName;
      this.contactObj['email'] = res.user.email;
      this.contactObj['phoneNumber'] = res.user.phoneNumber;
      this.contactObj['photoURL'] = res.user.photoURL;
      date = Date.now();
      this.contactObj['date'] = date;
      this.contactObj['dateNowISO'] = this.datePipe.transform(date, 'EEEE, MMMM d, y, h:mm:ss a zzzz');
      this.contactObj['dateNowMilliseconds'] = formatDate(date, 'dd/MM/yyyy, h:mm a', 'en');
      this.saveMessage();
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    });
  }
  saveMessage() {
    this.angularFirestore.collection('contactUs').add(this.contactObj).then((res) => {
      this.logout();
      alert('Send Message And Token Id - ' + res.id);
    });
  }

  logout() {
    this.angularFireAuth.auth.signOut().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  get f() { return this.registerForm.controls; }

}
