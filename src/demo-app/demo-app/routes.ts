import {Routes} from '@angular/router';
import {Home} from './demo-app';
import {InputDemo} from '../input/input-demo';
import {CardDemo} from '../card/card-demo';


export const DEMO_APP_ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'card', component: CardDemo},
  {path: 'input', component: InputDemo}
];
