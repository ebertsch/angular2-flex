import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';

export const WHITESPACE = /\s+/g;
export { LayoutUtility } from './layout-utility';
export { BREAKPOINTS, SUFFIXES } from './media';
export { AttributeDirectiveFactory } from './attribute-directive-factory';


@NgModule({
  imports: [],
  exports: [],
})
export class LayoutCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutCoreModule,
      providers: [],
    };
  }
}
