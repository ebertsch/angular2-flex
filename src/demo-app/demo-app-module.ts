import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DemoApp, Home} from './demo-app/demo-app';
import {RouterModule} from '@angular/router';
import {MaterialModule} from 'angular2-flex';
import {DEMO_APP_ROUTES} from './demo-app/routes';

import {InputDemo} from './input/input-demo';
import {CardDemo} from './card/card-demo';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(DEMO_APP_ROUTES),
    MaterialModule.forRoot(),
  ],
  declarations: [
    CardDemo,
    DemoApp,
    Home,
    InputDemo
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
