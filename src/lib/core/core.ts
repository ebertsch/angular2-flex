import {NgModule, ModuleWithProviders} from '@angular/core';

const WHITESPACE = /\s+/g;
const ALIGNMENT_MAIN_AXIS = ['', 'start', 'center', 'end',
                             'stretch', 'space-around', 'space-between'];
const ALIGNMENT_CROSS_AXIS = ['', 'start', 'center', 'end', 'stretch'];

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
