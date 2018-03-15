import { RouterModule, Routes } from '@angular/router';

import { BindComponent } from './bind/bind.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'bind', component: BindComponent },
  { path: '', component: HomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
