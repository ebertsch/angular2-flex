import {NgModule, ModuleWithProviders} from '@angular/core';

import { LayoutModule } from './layout/index';
import { LayoutPaddingModule } from './layout-padding/index';
import { LayoutMarginModule } from './layout-margin/index';
import { LayoutWrapModule } from './layout-wrap/index';
import { LayoutFillModule } from './layout-fill/index';
import { HideModule } from './hide/index';
import { ShowModule } from './show/index';
import { LayoutAlignModule } from './layout-align/index';
import { FlexModule } from './flex/index';
import { FlexOrderModule } from './flex-order/index';
import { FlexOffsetModule } from './flex-offset/index';

const FLEX_ANGULAR_MODULES = [
  LayoutModule,
  LayoutMarginModule,
  LayoutPaddingModule,
  LayoutWrapModule,
  LayoutFillModule,
  HideModule,
  ShowModule,
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
    LayoutWrapModule.forRoot(),
    LayoutFillModule.forRoot(),
    HideModule.forRoot(),
    ShowModule.forRoot(),
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
