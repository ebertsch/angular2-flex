import {Routes} from '@angular/router';
import {Home} from './demo-app';
import {FlexDemo} from '../flex/flex-demo';

export const DEMO_APP_ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'flex', component: FlexDemo}
];
