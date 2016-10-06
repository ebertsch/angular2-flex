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

const FLEX_OFFSET_DEFAULT = 0;

@Directive({ selector: '[flexOffset]' })
export class FlexOffset extends ResponsiveAttributeWithValue {
  @Input('flexOffset') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset', element, renderer, FLEX_OFFSET_DEFAULT); }
}
@Directive({ selector: '[flexOffsetXs]' })
export class FlexOffsetXs extends ResponsiveAttributeWithValue {
  @Input('flexOffsetXs') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset-xs', element, renderer, FLEX_OFFSET_DEFAULT); }
}
@Directive({ selector: '[flexOffsetGtXs]' })
export class FlexOffsetGtXs extends ResponsiveAttributeWithValue {
  @Input('flexOffsetGtXs') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset-gt-xs', element, renderer, FLEX_OFFSET_DEFAULT); }
}
@Directive({ selector: '[flexOffsetSm]' })
export class FlexOffsetSm extends ResponsiveAttributeWithValue {
  @Input('flexOffsetSm') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset-sm', element, renderer, FLEX_OFFSET_DEFAULT); }
}
@Directive({ selector: '[flexOffsetGtSm]' })
export class FlexOffsetGtSm extends ResponsiveAttributeWithValue {
  @Input('flexOffsetGtSm') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset-gt-sm', element, renderer, FLEX_OFFSET_DEFAULT); }
}
@Directive({ selector: '[flexOffsetMd]' })
export class FlexOffsetMd extends ResponsiveAttributeWithValue {
  @Input('flexOffsetMd') valinputue: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset-md', element, renderer, FLEX_OFFSET_DEFAULT); }
}
@Directive({ selector: '[flexOffsetGtMd]' })
export class FlexOffsetGtMd extends ResponsiveAttributeWithValue {
  @Input('flexOffsetGtMd') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset-gt-md', element, renderer, FLEX_OFFSET_DEFAULT); }
}
@Directive({ selector: '[flexOffsetLg]' })
export class FlexOffsetLg extends ResponsiveAttributeWithValue {
  @Input('flexOffsetLg') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset-lg', element, renderer, FLEX_OFFSET_DEFAULT); }
}
@Directive({ selector: '[flexOffsetGtLg]' })
export class FlexOffsetGtLg extends ResponsiveAttributeWithValue {
  @Input('flexOffsetGtLg') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset-gt-lg', element, renderer, FLEX_OFFSET_DEFAULT); }
}
@Directive({ selector: '[flexOffsetXl]' })
export class FlexOffsetXl extends ResponsiveAttributeWithValue {
  @Input('flexOffsetXl') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-offset-xl', element, renderer, FLEX_OFFSET_DEFAULT); }
}

@NgModule({
  declarations: [
    FlexOffset,
    FlexOffsetGtLg,
    FlexOffsetGtMd,
    FlexOffsetGtSm,
    FlexOffsetGtXs,
    FlexOffsetLg,
    FlexOffsetMd,
    FlexOffsetSm,
    FlexOffsetXl,
    FlexOffsetXs
  ],
  imports: [CommonModule],
  exports: [
    FlexOffset,
    FlexOffsetGtLg,
    FlexOffsetGtMd,
    FlexOffsetGtSm,
    FlexOffsetGtXs,
    FlexOffsetLg,
    FlexOffsetMd,
    FlexOffsetSm,
    FlexOffsetXl,
    FlexOffsetXs
  ],
})
export class FlexOffsetModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlexOffsetModule,
      providers: []
    };
  }
}
