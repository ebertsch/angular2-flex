import {
  Renderer,
  ElementRef,
  ClassDefinition,
  Directive,
  Type
} from '@angular/core';

interface AttributeChanges {
  attributeValue: ValueChange;
}

interface ValueChange {
  currentValue: string;
  previousValue: string;
  isFirstChange(): boolean;
}

export class AttributeDirectiveFactory {
  public generateDirective(name: string, size: string, getValue?: Function): Type<any> {
    let fullName = size ? `${name}-${size}` : name;

    return Directive({
      selector: `[${fullName}]`,
      inputs: [`attributeValue: ${fullName}`]
    }).Class(this.generateClassDefinition(fullName, getValue));
  }

  public generateClassDefinition(attribute: string, getValue?: Function): ClassDefinition {

    return {
      constructor: [Renderer, ElementRef,
        function (renderer: Renderer, element: ElementRef) {
          this.renderer = renderer;
          this.element = element.nativeElement;

          this.selector = attribute;
          this.attributeValue = '';
        }],

      ngOnInit() {
        if (!this.attributeValue) {
          this.renderer.setElementClass(this.element, this.selector, true);
        }
      },

      ngOnChanges(changes: AttributeChanges) {
        if (changes.attributeValue.currentValue === changes.attributeValue.previousValue) {
          return;
        }

        let currentValue = this.value(changes.attributeValue.currentValue);
        if (!changes.attributeValue.isFirstChange()) {
          let previousValue = this.value(changes.attributeValue.previousValue);

          this.removeClass(this.normalizeClass(previousValue));
          this.addClass(this.normalizeClass(currentValue));
        } else {
          this.addClass(this.normalizeClass(currentValue));
        }
      },

      value: getValue || function () { return ''; },

      addClass(className: string) {
        this.renderer.setElementClass(this.element, className, true);
      },

      removeClass(className: string) {
        this.renderer.setElementClass(this.element, className, false);
      },

      normalizeClass(value: string) {
        if (!value) {
          return this.selector;
        }

        return `${this.selector}-${value}`;
      }
    };
  }
}
