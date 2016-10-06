import {NgModule, ModuleWithProviders} from '@angular/core';

import { LayoutModule } from './layout/index';
import { LayoutPaddingModule } from './layout-padding/index';
import { LayoutMarginModule } from './layout-margin/index';
import { LayoutHideModule } from './layout-hide/index';
import { LayoutShowModule } from './layout-show/index';
import { LayoutAlignModule } from './layout-align/index';
import { FlexModule } from './flex/index';
import { FlexOrderModule } from './flex-order/index';
import { FlexOffsetModule } from './flex-offset/index';

const FLEX_ANGULAR_MODULES = [
  LayoutModule,
  LayoutMarginModule,
  LayoutPaddingModule,
  LayoutHideModule,
  LayoutShowModule,
  LayoutAlignModule,
  FlexModule,
  FlexOrderModule,
  FlexOffsetModule
];

@NgModule({
  imports: [
    LayoutModule.forRoot(),
    LayoutMarginModule.forRoot(),
    LayoutPaddingModule.forRoot(),
    LayoutHideModule.forRoot(),
    LayoutShowModule.forRoot(),
    LayoutAlignModule.forRoot(),
    FlexModule.forRoot(),
    FlexOrderModule.forRoot(),
    FlexOffsetModule.forRoot()
  ],
  exports: FLEX_ANGULAR_MODULES,
})
export class Angular2FlexRootModule { }


@NgModule({
  imports: FLEX_ANGULAR_MODULES,
  exports: FLEX_ANGULAR_MODULES,
})
export class Angular2FlexModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: Angular2FlexRootModule};
  }
}
