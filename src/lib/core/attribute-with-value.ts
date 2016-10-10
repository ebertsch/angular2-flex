import { Renderer, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export class SimpleBase implements OnInit {
  public value: string | number;
  public valueF: string | number;
  private element: any;

  constructor(element: any, private renderer: Renderer) {
    this.element = element.nativeElement;
  }

  ngOnInit() {
    this.renderer.setElementClass(this.element, this.value.toString(), true);
    if (this.valueF) {
      this.renderer.setElementClass(this.element, this.valueF.toString(), true);
    }
  }
}

export class ResponsiveAttributeWithValue implements OnChanges, OnInit {
  input: string | number;
  private element: any;

  constructor(private cssClass: string, element: any,
              private renderer: Renderer,
              private defaultValue?: string | number) {
    this.element = element.nativeElement;
  }

  ngOnInit() {
    if (!this.input) {
      this.renderer.setElementClass(this.element, this.getClassName(), true);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['input'].currentValue === changes['input'].previousValue) {
      return;
    }

    if (!changes['input'].isFirstChange()) {
      this.renderer.setElementClass(this.element, this.getClassName(changes['input'].previousValue), false);
      this.renderer.setElementClass(this.element, this.getClassName(changes['input'].currentValue), true);
    } else {
      this.renderer.setElementClass(this.element, this.getClassName(changes['input'].currentValue), true);
    }
  }

  getClassName(value?: string) {
    if (!value && this.defaultValue === undefined) {
      return this.cssClass;
    }

    return `${this.cssClass}-${value || this.defaultValue}`;
  }
}
