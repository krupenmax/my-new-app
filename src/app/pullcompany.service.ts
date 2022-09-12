import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PullcompanyService {

  private mes = this.http.get<{}[]>('http://www.portal.nalog.gov.by/grp/getData?unp=%7BUNP%7D&charset=UTF-8&type=json');
  
  public subscribe() {
    this.mes.subscribe(data=>{
      console.log(data)});     
  }

  constructor(private http: HttpClient) {
    
   }
}
