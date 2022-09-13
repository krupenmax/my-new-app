import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable, from} from 'rxjs';
import { CompanyInterface } from '../company-type';

@Component({
  selector: 'app-company-info',
  standalone: true,
  styleUrls: ['./company-info.component.scss'],
  templateUrl: './company-info.component.html',
})
export class CompanyInfoComponent implements OnInit {
  constructor(private companyService: CompanyService) {
   }
  public subscribe() {
    this.companyService.myObservable.subscribe(this.companyService.mes);
  }
 
  ngOnInit(): void {
  }

}
