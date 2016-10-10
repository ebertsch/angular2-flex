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
  let fullName = breakPoint ? `layout-wrap-${breakPoint}` : 'layout-wrap';

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
export class LayoutWrapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutWrapModule,
      providers: []
    };
  }
}
