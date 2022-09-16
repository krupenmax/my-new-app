import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable, from, delay, of, concatMap, map, toArray} from 'rxjs';
import { CompanyInterface } from '../company-type';
import { CommonModule } from '@angular/common';
import { rowType } from '../row';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-company-info',
  standalone: true,
  styleUrls: ['./company-info.component.scss'],
  templateUrl: './company-info.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyInfoComponent implements OnInit {
  public companyObservable: Observable<rowType[]>;
  public isParsed: boolean = false;
  constructor(private companyService: CompanyService, private cdr: ChangeDetectorRef) { 
    this.companyObservable = new Observable();
   }
  public subscribe() {
    this.companyObservable = this.companyService.companyObservable;
    this.companyObservable.subscribe(data => console.log(data));
    this.isParsed = true;
    this.cdr.detectChanges();
  }
 
  ngOnInit(): void {
  }

}
