import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PullcompanyService {
  public mes = this.http.get<{}[]>('http://www.portal.nalog.gov.by/grp/getData?unp=%7BUNP%7D&charset=UTF-8&type=json');

  subscribe() {
    this.mes.subscribe();
    console.log(this.mes);
  }

  constructor(private http: HttpClient) {
    
   }
}
