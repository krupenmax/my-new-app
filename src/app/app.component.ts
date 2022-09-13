import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyService } from './company.service';

@Component({
  imports: [ RouterModule, CompanyInfoComponent, HttpClientModule ],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  providers: [ CompanyService ],
})
export class AppComponent {
  title = 'my-new-app';
}
