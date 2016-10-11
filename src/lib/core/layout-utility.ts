import { WHITESPACE } from './core';

export class LayoutUtility {

  static findIn(item: string, list: string[], replaceWith?: string) {
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

}
