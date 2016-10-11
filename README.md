# Angular2-Flex - Flexbox directives for Angular 2

The goal of this project is to provide interum flexbox support for angular 2 apps while the
Angular Material Team is busy working on Angular Material 2. With some luck all of the existing
Angular Material directives will be supported.

Demo Site: [https://angular2-flex.firebaseapp.com/](https://angular2-flex.firebaseapp.com/)

#### Usage
Install via NPM<br>
`npm i -S angular2-flex`

Add a link to `/node_modules/angular2-flex/layout.css`


Update your AppModule
```
import {Angular2FlexModule} from 'angular2-flex'; // <- do this
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FlexModule.forRoot(), // <- do this
  ],
  declarations: [
    DemoApp
  ]
})

```


### Development
Currently working on:
* Get flex-offset working
* Add documentation for directives
* Update README for directives with samples
* $media service like [Angular Material](https://material.angularjs.org/latest/api/service/$mdMedia) but using observables
* Move SCSS files into their respective components
* Added Unit tests and e2e tests


#### Feature status:

| Feature          | Status                              | Docs         | Issue          |
|------------------|-------------------------------------|--------------|----------------|
| layout           |                           Available | [README][1]  |              - |
| flex             |                           Available | [README][2]  |              - |
| flex-order       |                           Available | [README][3]  |              - |
| flex-offset      |                           Available | [README][4]  |              - |
| layout-align     |                           Available | [README][5]  |              - |
| layout-fill      |                           Available | [README][6]  |              - |
| layout-wrap      |                           Available | [README][7]  |              - |
| layout-nowrap    |                           Available | [README][8]  |              - |
| layout-margin    |                           Available | [README][9]  |              - |
| layout-padding   |                           Available | [README][10] |              - |
| show             |                           Available | [README][11] |              - |
| hide             |                           Available | [README][12] |              - |
| media            |                         Not started |           -  |              - |

"Available" means that the components or feature is published and available for use, but may still
be missing some behaviors or polish.


### Thanks

The [Angular Material 2][14] project was used a base for this project build system it is a thing of
beauty. Some of the logic and scss files from [Angular Material 1][15] were used for this project as
well. Thanks to the Angular Team for all of their great work on all of their projects.

[1]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/layout/README.md
[2]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/flex/README.md
[3]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/flex-order/README.md
[4]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/flex-offset/README.md
[5]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/layout-align/README.md
[6]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/layout-fill/README.md
[7]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/layout-wrap/README.md
[8]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/layout-nowrap/README.md
[9]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/layout-margin/README.md
[10]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/layout-padding/README.md
[11]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/show/README.md
[12]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/hide/README.md
[13]: https://github.com/ebertsch/angular2-flex/blob/master/src/lib/media/README.md
[14]: https://github.com/angular/material2
[15]: https://github.com/angular/material
