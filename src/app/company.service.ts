import { Injectable } from '@angular/core';
import { CompanyInterface } from './company-type';
import { Observer, Observable, from, concatMap, of, delay, mergeMap, concat, map, tap, timer, pipe, switchMap, toArray, interval, bufferTime, concatAll, mergeAll, throttle} from 'rxjs';
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
  public companyObservable: Observable<rowType[]>; // = new Observable();
  
  constructor(private http: HttpClient) {
    // from(this.UNP).pipe(
    //   delay(1000),
    // ).subscribe(e => console.log(e));

    this.companyObservable = from(this.UNP).pipe(
      
      concatMap(data => this.http.get<rowType>(`grp/getData?unp=${data}&charset=UTF-8&type=json`).pipe(delay(1000))),
      toArray()
    );
  }
}
