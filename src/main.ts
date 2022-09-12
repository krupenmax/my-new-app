import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, ROUTES } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module'


bootstrapApplication(AppComponent, {
  providers: [
    // Configuring the Router
    importProvidersFrom(RouterModule.forRoot(routes)),
  ]
});