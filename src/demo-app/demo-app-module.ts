import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DemoApp, Home} from './demo-app/demo-app';
import {RouterModule} from '@angular/router';
import {Angular2FlexModule} from 'angular2-flex';
import {MaterialModule} from '@angular/material';
import {DEMO_APP_ROUTES} from './demo-app/routes';

import {FlexDemo} from './flex/flex-demo';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(DEMO_APP_ROUTES),
    MaterialModule.forRoot(),
    Angular2FlexModule.forRoot(),
  ],
  declarations: [
    FlexDemo,
    DemoApp,
    Home
  ],
  entryComponents: [
    DemoApp
  ],
})
export class DemoAppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(DemoApp);
  }
}
