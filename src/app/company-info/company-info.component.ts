import { Component, OnInit } from '@angular/core';
import { PullcompanyService } from '../pullcompany.service';

@Component({
  selector: 'app-company-info',
  standalone: true,
  styleUrls: ['./company-info.component.scss'],
  templateUrl: './company-info.component.html',
})
export class CompanyInfoComponent implements OnInit {

  constructor(private pullCompanyService: PullcompanyService) { }

  public pullCompanies(): void {
    this.pullCompanyService.subscribe();
  }

  ngOnInit(): void {
  }

}
