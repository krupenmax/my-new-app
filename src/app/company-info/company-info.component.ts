import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable, from, delay, of, concatMap, map, toArray} from 'rxjs';
import { CompanyInterface } from '../company-type';
import { CommonModule } from '@angular/common';
import { rowType } from '../row';

@Component({
  selector: 'app-company-info',
  standalone: true,
  styleUrls: ['./company-info.component.scss'],
  templateUrl: './company-info.component.html',
  imports: [CommonModule]
})
export class CompanyInfoComponent implements OnInit {
  public companyObservable: Observable<rowType[]>;
  constructor(private companyService: CompanyService) { 
    this.companyObservable = new Observable();
   }
  public subscribe() {
    this.companyObservable = this.companyService.companyObservable;
  }
 
  ngOnInit(): void {
  }

}
