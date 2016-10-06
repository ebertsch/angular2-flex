import { Renderer } from '@angular/core';

export class ResponsiveAttributeWithoutValue {
  constructor(cssClass: string, el: any, renderer: Renderer) {
    renderer.setElementClass(el, cssClass, true);
  }
}
