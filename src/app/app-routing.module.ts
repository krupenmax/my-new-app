import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes =   [
  {
    path: '',
    loadComponent: () => import('./company-info/company-info.component')
            .then(m => m.CompanyInfoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
