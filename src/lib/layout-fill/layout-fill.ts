import { NgModule, ModuleWithProviders } from '@angular/core';
import { BREAKPOINTS, AttributeDirectiveFactory } from '../core';


let directives: any[] = [];
let generator = new AttributeDirectiveFactory();

BREAKPOINTS.forEach(breakPoint => {
  let name = breakPoint ? `layout-fill-${breakPoint}` : 'layout-fill';
  directives.push(generator.generateDirective(name, breakPoint));
});


@NgModule({
  declarations: [...directives],
  imports: [],
  exports: [...directives],
})
export class LayoutFillModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutFillModule,
      providers: []
    };
  }
}
