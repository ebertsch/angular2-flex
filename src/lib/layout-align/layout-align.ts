import {
  Directive,
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { BREAKPOINTS, extractAlignAxis, AttributeWithValueFactory } from '../core';

function getValidValue(value: any) {
  let attributeValue = value;
  let axis = extractAlignAxis(attributeValue);
  attributeValue = `${axis.main}-${axis.cross}`;
  return attributeValue;
}

let directives: any[] = [];
BREAKPOINTS.forEach(breakPoint => {
  let fullName = breakPoint ? `layout-align-${breakPoint}` : 'layout-align';

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
export class LayoutAlignModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutAlignModule,
      providers: []
    };
  }
}
