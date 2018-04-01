import { RouterModule, Routes } from '@angular/router';

import { BindComponent } from './bind/bind.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'bind', component: BindComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
