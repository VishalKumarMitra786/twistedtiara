import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(public http: HttpClient) { }

  display(bearerToken: string) {
    const headers = new HttpHeaders();
    headers.append('Authorization', bearerToken)
    this.http.get('https://localhost:44385/account/display', { headers: headers }).toPromise().then((res) => {
      console.log(res);
    }).catch(err => console.error(err));
  }
}
