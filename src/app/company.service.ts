import { Injectable } from '@angular/core';
import { CompanyInterface } from './company-type';
import { Observer, Observable, from, concatMap, of, delay, map} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgIfContext } from '@angular/common';
import { rowType } from './row';
import { RouterLinkWithHref } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public str = "";
  private UNP: string[] = [ 
    '491625265',
    '290954125',
    '490087269',
    '691379465',
    '200056225',
    '291563006',
    '193361610',
    '191111948',
    '193545149',
  ] 
  public companyObservable = from(this.UNP)
  .pipe(
    map((data) => this.str = data),
    ( data => { return this.http.get<rowType>('/grp/getData?unp=' + data +'&charset=UTF-8&type=json')})
  );
  constructor(private http: HttpClient) {
    this.companyObservable.subscribe(data => console.log(data));
  }
}
