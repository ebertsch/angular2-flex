import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'home',
  template: `
    <p>Welcome to the development demos for Angular2 Flex!</p>
    <p>Open the sidenav to select a demo. </p>
  `
})
export class Home {}

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  providers: [],
  templateUrl: 'demo-app.html',
  styleUrls: ['demo-app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoApp { }
