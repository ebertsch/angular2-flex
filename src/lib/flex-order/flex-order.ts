import { NgModule, ModuleWithProviders } from '@angular/core';
import { BREAKPOINTS, AttributeDirectiveFactory } from '../core';


function getValue(value: any) {
  let attributeValue = value;
  if (!attributeValue || isNaN(+attributeValue)) {
    attributeValue = '0';
  }

  return attributeValue;
}


let directives: any[] = [];
let generator = new AttributeDirectiveFactory();

BREAKPOINTS.forEach(breakPoint => {
  let name = breakPoint ? `flex-order-${breakPoint}` : 'flex-order';
  directives.push(generator.generateDirective(name, breakPoint, getValue));
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
