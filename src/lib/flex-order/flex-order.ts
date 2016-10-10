import {
  Directive,
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { BREAKPOINTS, AttributeWithValueFactory } from '../core';

function getValidValue(value: any) {
  let attributeValue = value;
  if (!attributeValue || isNaN(+attributeValue)) {
    attributeValue = '0';
  }

  return attributeValue;
}

let directives: any[] = [];
BREAKPOINTS.forEach(breakPoint => {
  let fullName = breakPoint ? `flex-order-${breakPoint}` : 'flex-order';

  directives.push(
    Directive({ selector: `[${fullName}]`, inputs: [`value: ${fullName}`] })
      .Class(AttributeWithValueFactory(fullName, getValidValue))
  );
});

@NgModule({
  declarations: [
    ...directives
  ],
  imports: [],
  exports: [
    ...directives
  ],
})
export class FlexOrderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlexOrderModule,
      providers: []
    };
  }
}
