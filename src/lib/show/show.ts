import {
  Directive,
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { BREAKPOINTS, AttributeWithValueFactory } from '../core';

function getValidValue(value: any) {
  return '';
}

let directives: any[] = [];
BREAKPOINTS.forEach(breakPoint => {
  let fullName = breakPoint ? `show-${breakPoint}` : 'show';

  directives.push(
    Directive({ selector: `[${fullName}]`, inputs: [`value: ${fullName}`] })
      .Class(AttributeWithValueFactory(fullName, getValidValue))
  );
});



@NgModule({
  declarations: [...directives],
  imports: [],
  exports: [...directives],
})
export class ShowModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShowModule,
      providers: []
    };
  }
}
