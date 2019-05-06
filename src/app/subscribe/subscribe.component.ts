import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  subscribeForm: FormGroup;
  subscribeObj = {
    subscribe_name: '',
    subscribe_phonenumber: null
  };

  constructor(private angularFireAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.subscribeForm = this.formBuilder.group({
      subscribe_name: ['', Validators.required],
      subscribe_phonenumber: [null, Validators.required, Validators.minLength(10), Validators.maxLength(10)]
    });
  }

}
