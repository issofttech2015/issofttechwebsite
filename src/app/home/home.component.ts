import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home/home.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  _geoInformations: any[];


  constructor(private homeService: HomeService,
    private afs: AngularFirestore,
    private datePipe: DatePipe) {
    // this.afs.firestore.settings({timestampsInSnapshots: true});

  }

  ngOnInit() {
    let date;
    this.homeService.getGeoInformation().subscribe(res => {
      date = Date.now();
      res['date'] = date;
      res['dateNowISO'] = this.datePipe.transform(date, 'EEEE, MMMM d, y, h:mm:ss a zzzz');
      res['dateNowMilliseconds'] = formatDate(date, 'dd/MM/yyyy, h:mm a', 'en');
      // this.afs.collection('geoInformations').add(res);
    });

    // ==================== Get All Visit our site  =====================
    // this.getGeoList().subscribe(actionArray => {
    //   this._geoInformations = actionArray.map(item => {
    //     return {
    //       id: item.payload.doc.id,
    //       ...item.payload.doc.data()
    //     } as any;
    //   });
    //   console.log(this._geoInformations);
    // });
    // ==================================================================

  }

  getGeoList() {
    return this.afs.collection('geoInformations').snapshotChanges();
  }

}
