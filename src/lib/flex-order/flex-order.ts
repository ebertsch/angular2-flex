import {
  Input,
  Directive,
  Renderer,
  ElementRef,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveAttributeWithValue } from '../core';

const FLEX_ORDER_DEFAULT = 0;

@Directive({ selector: '[flexOrder]' })
export class FlexOrder extends ResponsiveAttributeWithValue {
  @Input('flexOrder') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order', element, renderer, FLEX_ORDER_DEFAULT); }
}
@Directive({ selector: '[flexOrderXs]' })
export class FlexOrderXs extends ResponsiveAttributeWithValue {
  @Input('flexOrderXs') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order-xs', element, renderer, FLEX_ORDER_DEFAULT); }
}
@Directive({ selector: '[flexOrderGtXs]' })
export class FlexOrderGtXs extends ResponsiveAttributeWithValue {
  @Input('flexOrderGtXs') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order-gt-xs', element, renderer, FLEX_ORDER_DEFAULT); }
}
@Directive({ selector: '[flexOrderSm]' })
export class FlexOrderSm extends ResponsiveAttributeWithValue {
  @Input('flexOrderSm') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order-sm', element, renderer, FLEX_ORDER_DEFAULT); }
}
@Directive({ selector: '[flexOrderGtSm]' })
export class FlexOrderGtSm extends ResponsiveAttributeWithValue {
  @Input('flexOrderGtSm') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order-gt-sm', element, renderer, FLEX_ORDER_DEFAULT); }
}
@Directive({ selector: '[flexOrderMd]' })
export class FlexOrderMd extends ResponsiveAttributeWithValue {
  @Input('flexOrderMd') valinputue: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order-md', element, renderer, FLEX_ORDER_DEFAULT); }
}
@Directive({ selector: '[flexOrderGtMd]' })
export class FlexOrderGtMd extends ResponsiveAttributeWithValue {
  @Input('flexOrderGtMd') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order-gt-md', element, renderer, FLEX_ORDER_DEFAULT); }
}
@Directive({ selector: '[flexOrderLg]' })
export class FlexOrderLg extends ResponsiveAttributeWithValue {
  @Input('flexOrderLg') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order-lg', element, renderer, FLEX_ORDER_DEFAULT); }
}
@Directive({ selector: '[flexOrderGtLg]' })
export class FlexOrderGtLg extends ResponsiveAttributeWithValue {
  @Input('flexOrderGtLg') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order-gt-lg', element, renderer, FLEX_ORDER_DEFAULT); }
}
@Directive({ selector: '[flexOrderXl]' })
export class FlexOrderXl extends ResponsiveAttributeWithValue {
  @Input('flexOrderXl') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-order-xl', element, renderer, FLEX_ORDER_DEFAULT); }
}



@NgModule({
  declarations: [
    FlexOrder,
    FlexOrderGtLg,
    FlexOrderGtMd,
    FlexOrderGtSm,
    FlexOrderGtXs,
    FlexOrderLg,
    FlexOrderMd,
    FlexOrderSm,
    FlexOrderXl,
    FlexOrderXs
  ],
  imports: [CommonModule],
  exports: [
    FlexOrder,
    FlexOrderGtLg,
    FlexOrderGtMd,
    FlexOrderGtSm,
    FlexOrderGtXs,
    FlexOrderLg,
    FlexOrderMd,
    FlexOrderSm,
    FlexOrderXl,
    FlexOrderXs
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
