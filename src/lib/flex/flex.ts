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

@Directive({ selector: '[flex]' })
export class Flex extends ResponsiveAttributeWithValue {
  @Input('flex') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex', element, renderer); }
}
@Directive({ selector: '[flexXs]' })
export class FlexXs extends ResponsiveAttributeWithValue {
  @Input('flexXs') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-xs', element, renderer); }
}
@Directive({ selector: '[flexGtXs]' })
export class FlexGtXs extends ResponsiveAttributeWithValue {
  @Input('flexGtXs') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-gt-xs', element, renderer); }
}
@Directive({ selector: '[flexSm]' })
export class FlexSm extends ResponsiveAttributeWithValue {
  @Input('flexSm') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-sm', element, renderer); }
}
@Directive({ selector: '[flexGtSm]' })
export class FlexGtSm extends ResponsiveAttributeWithValue {
  @Input('flexGtSm') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-gt-sm', element, renderer); }
}
@Directive({ selector: '[flexMd]' })
export class FlexMd extends ResponsiveAttributeWithValue {
  @Input('FlexMd') valinputue: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-md', element, renderer); }
}
@Directive({ selector: '[flexGtMd]' })
export class FlexGtMd extends ResponsiveAttributeWithValue {
  @Input('flexGtMd') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-gt-md', element, renderer); }
}
@Directive({ selector: '[flexLg]' })
export class FlexLg extends ResponsiveAttributeWithValue {
  @Input('flexLg') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-lg', element, renderer); }
}
@Directive({ selector: '[flexGtLg]' })
export class FlexGtLg extends ResponsiveAttributeWithValue {
  @Input('flexGtLg') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-gt-lg', element, renderer); }
}
@Directive({ selector: '[flexXl]' })
export class FlexXl extends ResponsiveAttributeWithValue {
  @Input('flexXl') input: number;
  constructor(element: ElementRef, renderer: Renderer) { super('flex-xl', element, renderer); }
}


@NgModule({
  declarations: [
    Flex,
    FlexGtLg,
    FlexGtMd,
    FlexGtSm,
    FlexGtXs,
    FlexLg,
    FlexMd,
    FlexSm,
    FlexXl,
    FlexXs
  ],
  imports: [CommonModule],
  exports: [
    Flex,
    FlexGtLg,
    FlexGtMd,
    FlexGtSm,
    FlexGtXs,
    FlexLg,
    FlexMd,
    FlexSm,
    FlexXl,
    FlexXs
  ],
})
export class FlexModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlexModule,
      providers: []
    };
  }
}
