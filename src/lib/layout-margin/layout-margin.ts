import { Directive, ElementRef, Renderer, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveAttributeWithoutValue } from '../core';

@Directive({ selector: '[layoutMargin]' })
export class LayoutMargin extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutMarginXs]' })
export class LayoutMarginXs extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin-xs', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutMarginGtXs]' })
export class LayoutMarginGtXs extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin-gt-xs', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutMarginSm]' })
export class LayoutMarginSm extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin-sm', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutMarginGtSm]' })
export class LayoutMarginGtSm extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin-gt-sm', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutMarginMd]' })
export class LayoutMarginMd extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin-md', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutMarginGtMd]' })
export class LayoutMarginGtMd extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin-gt-md', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutMarginLg]' })
export class LayoutMarginLg extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin-lg', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutMarginGtLg]' })
export class LayoutMarginGtLg extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin-gt-lg', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutMarginXl]' })
export class LayoutMarginXl extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('layout-margin-xl', el.nativeElement, renderer);
  }
}

@NgModule({
  declarations: [
    LayoutMargin,
    LayoutMarginGtLg,
    LayoutMarginGtMd,
    LayoutMarginGtSm,
    LayoutMarginGtXs,
    LayoutMarginLg,
    LayoutMarginMd,
    LayoutMarginSm,
    LayoutMarginXl,
    LayoutMarginXs
  ],
  imports: [CommonModule],
  exports: [
    LayoutMargin,
    LayoutMarginGtLg,
    LayoutMarginGtMd,
    LayoutMarginGtSm,
    LayoutMarginGtXs,
    LayoutMarginLg,
    LayoutMarginMd,
    LayoutMarginSm,
    LayoutMarginXl,
    LayoutMarginXs
  ],
})
export class LayoutMarginModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutMarginModule,
      providers: []
    };
  }
}
