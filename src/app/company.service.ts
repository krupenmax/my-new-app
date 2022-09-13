import { Injectable } from '@angular/core';
import { CompanyInterface } from './company-type';
import { Observer, Observable, from, concatMap, of, delay} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgIfContext } from '@angular/common';
import { rowType } from './row';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

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

  public companies: rowType[] = []; 

   public mes: Observer<rowType> = {
    next: (x: rowType) => this.http.get<rowType>('/grp/getData?unp=' + x.ROW.VUNP + '&charset=UTF-8&type=json').subscribe(data => console.log(data.ROW.VUNP)),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  public myObservable: Observable<rowType> = from(this.companies).pipe(concatMap(item => of(item).pipe(delay(1000))));
  
  constructor(private http: HttpClient) {
    for (let i: number = 0; i < this.UNP.length; i++) {
      let company: CompanyInterface = {
        CKODSOST: "",
        DLIKV: "",
        DREG: "",
        NMNS: "",
        VKODS: "",
        VLIKV: "",
        VMNS: "",
        VNAIMK: "",
        VNAIMP: "",
        VPADRES: "",
        VUNP: this.UNP[i],
      }
      let rowType: rowType = {ROW: company};
      this.companies.push(rowType);
    }
    console.log(this.companies);
  }
}
