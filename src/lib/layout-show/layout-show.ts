import { Directive, ElementRef, Renderer, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveAttributeWithoutValue } from '../core';

@Directive({ selector: '[layoutShow]' })
export class LayoutShow extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutShowXs]' })
export class LayoutShowXs extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show-xs', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutShowGtXs]' })
export class LayoutShowGtXs extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show-gt-xs', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutShowSm]' })
export class LayoutShowSm extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show-sm', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutShowGtSm]' })
export class LayoutShowGtSm extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show-gt-sm', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutShowMd]' })
export class LayoutShowMd extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show-md', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutShowGtMd]' })
export class LayoutShowGtMd extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show-gt-md', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutShowLg]' })
export class LayoutShowLg extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show-lg', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutShowGtLg]' })
export class LayoutShowGtLg extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show-gt-lg', el.nativeElement, renderer);
  }
}
@Directive({ selector: '[layoutShowXl]' })
export class LayoutShowXl extends ResponsiveAttributeWithoutValue {
  constructor (el: ElementRef, renderer: Renderer) {
   super('show-xl', el.nativeElement, renderer);
  }
}

@NgModule({
  declarations: [
    LayoutShow,
    LayoutShowGtLg,
    LayoutShowGtMd,
    LayoutShowGtSm,
    LayoutShowGtXs,
    LayoutShowLg,
    LayoutShowMd,
    LayoutShowSm,
    LayoutShowXl,
    LayoutShowXs
  ],
  imports: [CommonModule],
  exports: [
    LayoutShow,
    LayoutShowGtLg,
    LayoutShowGtMd,
    LayoutShowGtSm,
    LayoutShowGtXs,
    LayoutShowLg,
    LayoutShowMd,
    LayoutShowSm,
    LayoutShowXl,
    LayoutShowXs
  ]
})
export class LayoutShowModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutShowModule,
      providers: []
    };
  }
}
