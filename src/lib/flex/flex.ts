import { NgModule, ModuleWithProviders } from '@angular/core';
import { BREAKPOINTS, LayoutUtility, AttributeDirectiveFactory } from '../core';


export const FLEX_OPTIONS: string[] = [
  'grow',
  'initial',
  'auto',
  'none',
  'noshrink',
  'nogrow'
];

function getValue(value: any) {
  let attributeValue = value;
  if (!LayoutUtility.findIn(attributeValue, FLEX_OPTIONS)) {
    if (isNaN(attributeValue)) {
      attributeValue = '';
    }
  }

  return attributeValue;
}

let directives: any[] = [];
let generator = new AttributeDirectiveFactory();

BREAKPOINTS.forEach(breakPoint => {
  let name = breakPoint ? `flex-${breakPoint}` : 'flex';
  directives.push(generator.generateDirective(name, breakPoint, getValue));
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
