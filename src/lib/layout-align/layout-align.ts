import {
  Input,
  Directive,
  Renderer,
  ElementRef,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveAttributeWithValue, extractAlignAxis } from '../core';


@Directive({ selector: '[layoutAlign]' })
export class LayoutAlign extends ResponsiveAttributeWithValue {
  @Input('layoutAlign') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align', element, renderer); }
}
@Directive({ selector: '[layoutAlignXs]' })
export class LayoutAlignXs extends ResponsiveAttributeWithValue {
  @Input('layoutAlignXs') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align-xs', element, renderer); }
}
@Directive({ selector: '[layoutAlignGtXs]' })
export class LayoutAlignGtXs extends ResponsiveAttributeWithValue {
  @Input('layoutAlignGtXs') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align-gt-xs', element, renderer); }
}
@Directive({ selector: '[layoutAlignSm]' })
export class LayoutAlignSm extends ResponsiveAttributeWithValue {
  @Input('layoutAlignSm') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align-sm', element, renderer); }
}
@Directive({ selector: '[layoutAlignGtSm]' })
export class LayoutAlignGtSm extends ResponsiveAttributeWithValue {
  @Input('layoutAlignGtSm') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align-gt-sm', element, renderer); }
}
@Directive({ selector: '[layoutAlignMd]' })
export class LayoutAlignMd extends ResponsiveAttributeWithValue {
  @Input('layoutAlignMd') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align-md', element, renderer); }
}
@Directive({ selector: '[layoutAlignGtMd]' })
export class LayoutAlignGtMd extends ResponsiveAttributeWithValue {
  @Input('layoutAlignGtMd') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align-gt-md', element, renderer); }
}
@Directive({ selector: '[layoutAlignLg]' })
export class LayoutAlignLg extends ResponsiveAttributeWithValue {
  @Input('layoutAlignLg') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align-lg', element, renderer); }
}
@Directive({ selector: '[layoutAlignGtLg]' })
export class LayoutAlignGtLg extends ResponsiveAttributeWithValue {
  @Input('layoutAlignGtLg') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align-gt-lg', element, renderer); }
}
@Directive({ selector: '[layoutAlignXl]' })
export class LayoutAlignXl extends ResponsiveAttributeWithValue {
  @Input('layoutAlignXl') set value(value: string) {
    let axis = extractAlignAxis(value);
    this.input = `${axis.main}-${axis.cross}`;
  };
  constructor(element: ElementRef, renderer: Renderer) { super('layout-align-xl', element, renderer); }
}


@NgModule({
  declarations: [
    LayoutAlign,
    LayoutAlignGtLg,
    LayoutAlignGtMd,
    LayoutAlignGtSm,
    LayoutAlignGtXs,
    LayoutAlignLg,
    LayoutAlignMd,
    LayoutAlignSm,
    LayoutAlignXl,
    LayoutAlignXs
  ],
  imports: [CommonModule],
  exports: [
    LayoutAlign,
    LayoutAlignGtLg,
    LayoutAlignGtMd,
    LayoutAlignGtSm,
    LayoutAlignGtXs,
    LayoutAlignLg,
    LayoutAlignMd,
    LayoutAlignSm,
    LayoutAlignXl,
    LayoutAlignXs
  ],
})
export class LayoutAlignModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutAlignModule,
      providers: []
    };
  }
}
