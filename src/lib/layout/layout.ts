import {
  Directive,
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { BREAKPOINTS, findIn, LAYOUT_OPTIONS, AttributeWithValueFactory } from '../core';

function getValidValue(value: any) {
  let attributeValue = value;
  if (!findIn(value, LAYOUT_OPTIONS)) {
    attributeValue = LAYOUT_OPTIONS[0];
  }

  return attributeValue;
}

let directives: any[] = [];
BREAKPOINTS.forEach(breakPoint => {
  let fullName = breakPoint ? `layout-${breakPoint}` : 'layout';

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
export class LayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutModule,
      providers: []
    };
  }
}
