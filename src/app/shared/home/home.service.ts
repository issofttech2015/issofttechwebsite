import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GeoInformations } from './geo-information';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: Http,
  ) { }

  private get headers() {
    let h: Headers;
    h = new Headers();
    h.append('Content-Type', 'application/json');
    // h.append('enterprise_id', this.rlLocalStorageService.restApi.enterpriceId);
    // h.append('access_token', this.rlLocalStorageService.restApi.accessToken);
    // h.append('api_token', this.rlLocalStorageService.restApi.apiToken);
    return h;
  }

  getGeoInformation(): Observable<GeoInformations> {
    return this.http.get('https://ipapi.co/json/',
      new RequestOptions({ headers: this.headers }))
      .pipe(map(res => res.json()));
    //  return this.http.get('https://ipapi.co/json/', { observe: 'response' })
    //     .pipe(map((response => response.json())));
    // .subscribe((response: HttpResponse<GeoInformations>) => {
    //   // Data extraction from the HTTP response is already done
    //   // Display the result
    //   console.log('TJ user data', response.body);

    // });


    // this.http.get('https://ipapi.co/json/', { observe: 'response' })
    // .subscribe((response: HttpResponse<GeoInformation>) => {
    //   // Data extraction from the HTTP response is already done
    //   // Display the result
    //   console.log('TJ user data', response.body);
    //   console.log('TJ user data', response.status);
    // });
  }




}
