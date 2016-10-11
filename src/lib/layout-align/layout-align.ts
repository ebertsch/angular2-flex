import { NgModule, ModuleWithProviders } from '@angular/core';
import { BREAKPOINTS, WHITESPACE, AttributeDirectiveFactory } from '../core';


const ALIGNMENT_MAIN_AXIS = [
  '',
  'start',
  'center',
  'end',
  'stretch',
  'space-around',
  'space-between'
];

const ALIGNMENT_CROSS_AXIS = [
  '',
  'start',
  'center',
  'end',
  'stretch'
];

function extractAlignAxis(attrValue = '') {
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

function getValue(value: any) {
  let attributeValue = value;
  let axis = extractAlignAxis(attributeValue);
  attributeValue = `${axis.main}-${axis.cross}`;
  return attributeValue;
}

let directives: any[] = [];
let generator = new AttributeDirectiveFactory();

BREAKPOINTS.forEach(breakPoint => {
  let name = breakPoint ? `layout-align-${breakPoint}` : 'layout-align';
  directives.push(generator.generateDirective(name, breakPoint, getValue));
});


@NgModule({
  declarations: [...directives],
  imports: [],
  exports: [...directives],
})
export class LayoutAlignModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutAlignModule,
      providers: []
    };
  }
}
