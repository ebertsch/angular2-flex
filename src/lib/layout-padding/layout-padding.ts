import { Directive, ElementRef, Renderer, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveAttributeWithoutValue } from '../core';

@Directive({ selector: '[layoutPadding]' })
export class LayoutPadding extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutPaddingXs]' })
export class LayoutPaddingXs extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding-xs', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutPaddingGtXs]' })
export class LayoutPaddingGtXs extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding-gt-xs', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutPaddingSm]' })
export class LayoutPaddingSm extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding-sm', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutPaddingGtSm]' })
export class LayoutPaddingGtSm extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding-gt-sm', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutPaddingMd]' })
export class LayoutPaddingMd extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding-md', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutPaddingGtMd]' })
export class LayoutPaddingGtMd extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding-gt-md', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutPaddingLg]' })
export class LayoutPaddingLg extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding-lg', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutPaddingGtLg]' })
export class LayoutPaddingGtLg extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding-gt-lg', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutPaddingXl]' })
export class LayoutPaddingXl extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-padding-xl', el.nativeElement, renderer);
  }
}


@NgModule({
  declarations: [
    LayoutPadding,
    LayoutPaddingGtLg,
    LayoutPaddingGtMd,
    LayoutPaddingGtSm,
    LayoutPaddingGtXs,
    LayoutPaddingLg,
    LayoutPaddingMd,
    LayoutPaddingSm,
    LayoutPaddingXl,
    LayoutPaddingXs
  ],
  imports: [CommonModule],
  exports: [
    LayoutPadding,
    LayoutPaddingGtLg,
    LayoutPaddingGtMd,
    LayoutPaddingGtSm,
    LayoutPaddingGtXs,
    LayoutPaddingLg,
    LayoutPaddingMd,
    LayoutPaddingSm,
    LayoutPaddingXl,
    LayoutPaddingXs
  ],
})
export class LayoutPaddingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutPaddingModule,
      providers: []
    };
  }
}
