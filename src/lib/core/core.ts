import {NgModule, ModuleWithProviders,
  Renderer,
  ElementRef,
  SimpleChanges,
  ClassDefinition
} from '@angular/core';

export const WHITESPACE = /\s+/g;
export const SUFFIXES = /(-gt)?-(sm|md|lg|print)/g;
export const FLEX_OPTIONS: string[] = ['grow', 'initial', 'auto', 'none', 'noshrink', 'nogrow'];
export const LAYOUT_OPTIONS: string[] = ['row', 'column'];
export const PREFIX_REGEXP = /^((?:x|data)[\:\-_])/i;
export const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;

export const ALIGNMENT_MAIN_AXIS = ['', 'start', 'center', 'end',
                                    'stretch', 'space-around', 'space-between'];
export const ALIGNMENT_CROSS_AXIS = ['', 'start', 'center', 'end', 'stretch'];


// NOTE: these are also defined in constants::MEDIA_PRIORITY and constants::MEDIAs
export const API_WITH_VALUES = ['layout', 'flex', 'flex-order', 'flex-offset', 'layout-align'];
export const API_NO_VALUES = ['show', 'hide', 'layout-padding', 'layout-margin'];
export const BREAKPOINTS = ['', 'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg',
                            'gt-lg', 'xl', 'print'];

export function extractAlignAxis(attrValue = '') {
  let axis = {
    main: 'start',
    cross: 'stretch'
  }
  let values: string[];

  if (attrValue.indexOf('-') === 0 || attrValue.indexOf(' ') === 0) {
    // For missing main-axis values
    attrValue = `none${attrValue}`;
  }

  values = attrValue.toLowerCase().trim().replace(WHITESPACE, '-').split('-');
  if (values.length && (values[0] === 'space')) {
    // for main-axis values of 'space-around' or 'space-between'
    values = [`${values[0]}-${values[1]}`, values[2]];
  }

  if (values.length > 0) {
    axis.main = values[0] || axis.main;
  }
  if (values.length > 1) {
    axis.cross = values[1] || axis.cross;
  }

  if (ALIGNMENT_MAIN_AXIS.indexOf(axis.main) < 0) {
    axis.main = 'start';
  }
  if (ALIGNMENT_CROSS_AXIS.indexOf(axis.cross) < 0) {
    axis.cross = 'stretch';
  }

  return axis;
}

export function directiveNormalize(name: string) {
  return name
    .replace(PREFIX_REGEXP, '')
    .replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => {
      return offset ? letter.toUpperCase() : letter;
    });
}

export function AttributeWithValueFactory(attribute: string,
  validator: Function): ClassDefinition {
  return {
    constructor: [Renderer, ElementRef,
      function (renderer: Renderer, element: ElementRef) {
        this.renderer = renderer;
        this.element = element.nativeElement;

        this.selector = attribute;
        this.attributeValue = '';
      }],
    ngOnInit() {
      if (!this.value) {
        this.renderer.setElementClass(this.element, this.selector, true);
      }
    },
    ngOnChanges(changes: SimpleChanges) {
      if (changes['value'].currentValue === changes['value'].previousValue) {
        return;
      }

      if (!changes['value'].isFirstChange()) {
        let currentValue = this.trueValue(changes['value'].currentValue);
        let previousValue = this.trueValue(changes['value'].previousValue);

        this.renderer.setElementClass(this.element,
          this.normalizeClass(previousValue),
          false);
        this.renderer.setElementClass(this.element,
          this.normalizeClass(currentValue),
          true);
      } else {
        let value = this.trueValue(changes['value'].currentValue);

        this.renderer.setElementClass(this.element,
          this.normalizeClass(value), true);
      }
    },
    trueValue: validator,
    normalizeClass: function(value: any) {
      if (!value) {
        return this.selector;
      }

      return `${this.selector}-${value}`;
    }
  };
}

export function findIn(item: string, list: string[], replaceWith?: string) {
  item = replaceWith && item ? item.replace(WHITESPACE, replaceWith) : item;

  var found = false;
  if (item) {
    list.forEach((it: string) => {
      it = replaceWith ? it.replace(WHITESPACE, replaceWith) : it;
      found = found || (it === item);
    });
  }
  return found;
}



@NgModule({
  imports: [],
  exports: [],
})
export class MdCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdCoreModule,
      providers: [],
    };
  }
}
