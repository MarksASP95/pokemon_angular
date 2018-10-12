import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DisplayComponent } from './display/display.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Route[] = [
  {
    path: '',
    component: DisplayComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DisplayComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
