import { Directive, ElementRef, Renderer, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveAttributeWithoutValue } from '../core';

@Directive({ selector: '[layoutHide]' })
export class LayoutHide extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutHideXs]' })
export class LayoutHideXs extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide-xs', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutHideGtXs]' })
export class LayoutHideGtXs extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide-gt-xs', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutHideSm]' })
export class LayoutHideSm extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide-sm', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutHideGtSm]' })
export class LayoutHideGtSm extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide-gt-sm', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutHideMd]' })
export class LayoutHideMd extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide-md', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutHideGtMd]' })
export class LayoutHideGtMd extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide-gt-md', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutHideLg]' })
export class LayoutHideLg extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide-lg', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutHideGtLg]' })
export class LayoutHideGtLg extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide-gt-lg', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutHideXl]' })
export class LayoutHideXl extends ResponsiveAttributeWithoutValue {
  constructor(el: ElementRef, renderer: Renderer) {
    super('hide-xl', el.nativeElement, renderer);
  }
}


@NgModule({
  declarations: [
    LayoutHide,
    LayoutHideGtLg,
    LayoutHideGtMd,
    LayoutHideGtSm,
    LayoutHideGtXs,
    LayoutHideLg,
    LayoutHideMd,
    LayoutHideSm,
    LayoutHideXl,
    LayoutHideXs
  ],
  imports: [CommonModule],
  exports: [
    LayoutHide,
    LayoutHideGtLg,
    LayoutHideGtMd,
    LayoutHideGtSm,
    LayoutHideGtXs,
    LayoutHideLg,
    LayoutHideMd,
    LayoutHideSm,
    LayoutHideXl,
    LayoutHideXs
  ],
})
export class LayoutHideModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutHideModule,
      providers: []
    };
  }
}
