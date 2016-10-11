import { NgModule, ModuleWithProviders } from '@angular/core';
import { BREAKPOINTS, AttributeDirectiveFactory } from '../core';


let directives: any[] = [];
let generator = new AttributeDirectiveFactory();

BREAKPOINTS.forEach(breakPoint => {
  let name = breakPoint ? `layout-margin-${breakPoint}` : 'layout-margin';
  directives.push(generator.generateDirective(name, breakPoint));
});


@NgModule({
  declarations: [...directives],
  imports: [],
  exports: [...directives],
})
export class LayoutMarginModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutMarginModule,
      providers: []
    };
  }
}
