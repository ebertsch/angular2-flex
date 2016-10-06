import {
  Input,
  Directive,
  Renderer,
  ElementRef,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveAttributeWithValue } from '../core/index';

const LAYOUT_DEFAULT = 'row';

@Directive({ selector: '[layout]' })
export class Layout extends ResponsiveAttributeWithValue {
  @Input('layout') input: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout', element, renderer, LAYOUT_DEFAULT); }
}
@Directive({ selector: '[layoutXs]' })
export class LayoutXs extends ResponsiveAttributeWithValue {
  @Input('LayoutXs') input: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout-xs', element, renderer, LAYOUT_DEFAULT); }
}
@Directive({ selector: '[layoutGtXs]' })
export class LayoutGtXs extends ResponsiveAttributeWithValue {
  @Input('LayoutGtXs') input: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout-gt-xs', element, renderer, LAYOUT_DEFAULT); }
}
@Directive({ selector: '[layoutSm]' })
export class LayoutSm extends ResponsiveAttributeWithValue {
  @Input('LayoutSm') input: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout-sm', element, renderer, LAYOUT_DEFAULT); }
}
@Directive({ selector: '[layoutGtSm]' })
export class LayoutGtSm extends ResponsiveAttributeWithValue {
  @Input('LayoutGtSm') input: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout-gt-sm', element, renderer, LAYOUT_DEFAULT); }
}
@Directive({ selector: '[layoutMd]' })
export class LayoutMd extends ResponsiveAttributeWithValue {
  @Input('LayoutMd') valinputue: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout-md', element, renderer, LAYOUT_DEFAULT); }
}
@Directive({ selector: '[layoutGtMd]' })
export class LayoutGtMd extends ResponsiveAttributeWithValue {
  @Input('LayoutGtMd') input: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout-gt-md', element, renderer, LAYOUT_DEFAULT); }
}
@Directive({ selector: '[layoutLg]' })
export class LayoutLg extends ResponsiveAttributeWithValue {
  @Input('LayoutLg') input: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout-lg', element, renderer, LAYOUT_DEFAULT); }
}
@Directive({ selector: '[layoutGtLg]' })
export class LayoutGtLg extends ResponsiveAttributeWithValue {
  @Input('LayoutGtLg') input: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout-gt-lg', element, renderer, LAYOUT_DEFAULT); }
}
@Directive({ selector: '[layoutXl]' })
export class LayoutXl extends ResponsiveAttributeWithValue {
  @Input('LayoutXl') input: string;
  constructor(element: ElementRef, renderer: Renderer) { super('layout-xl', element, renderer, LAYOUT_DEFAULT); }
}

@NgModule({
  declarations: [
    Layout,
    LayoutGtLg,
    LayoutGtMd,
    LayoutGtSm,
    LayoutGtXs,
    LayoutLg,
    LayoutMd,
    LayoutSm,
    LayoutXl,
    LayoutXs
  ],
  imports: [ CommonModule ],
  exports: [
    Layout,
    LayoutGtLg,
    LayoutGtMd,
    LayoutGtSm,
    LayoutGtXs,
    LayoutLg,
    LayoutMd,
    LayoutSm,
    LayoutXl,
    LayoutXs
  ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutModule,
      providers: []
    };
  }
}
