import {Component} from '@angular/core';
let max = 5;

@Component({
  moduleId: module.id,
  selector: 'input-demo',
  templateUrl: 'flex-demo.html',
  styleUrls: ['flex-demo.css'],
})
export class FlexDemo {
  dividerColor: boolean;
  requiredField: boolean;
  floatingLabel: boolean;
  flexValue: string = 'my-test';
  name: string;
  items: any[] = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
  ];

  addABunch(n: number) {
    for (let x = 0; x < n; x++) {
      this.items.push({ value: ++max });
    }
  }
}
