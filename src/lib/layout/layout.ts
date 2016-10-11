import { NgModule, ModuleWithProviders } from '@angular/core';
import { BREAKPOINTS, LayoutUtility, AttributeDirectiveFactory } from '../core';


export const LAYOUT_OPTIONS: string[] = [
  'row',
  'column'
];

function getValue(value: any) {
  let attributeValue = value;
  if (!LayoutUtility.findIn(value, LAYOUT_OPTIONS)) {
    attributeValue = LAYOUT_OPTIONS[0];
  }

  return attributeValue;
}

let directives: any[] = [];
let generator = new AttributeDirectiveFactory();

BREAKPOINTS.forEach(breakPoint => {
  let name = breakPoint ? `layout-${breakPoint}` : 'layout';
  directives.push(generator.generateDirective(name, breakPoint, getValue));
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
