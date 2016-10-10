import {
  Directive,
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { BREAKPOINTS, findIn, FLEX_OPTIONS, AttributeWithValueFactory } from '../core';

function getValidValue(value: any) {
  let attributeValue = value;
  if (!findIn(attributeValue, FLEX_OPTIONS)) {
    if (isNaN(attributeValue)) {
      attributeValue = '';
    }
  }

  return attributeValue;
}

let directives: any[] = [];
BREAKPOINTS.forEach(breakPoint => {
  let fullName = breakPoint ? `flex-${breakPoint}` : 'flex';

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
export class FlexModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlexModule,
      providers: []
    };
  }
}
