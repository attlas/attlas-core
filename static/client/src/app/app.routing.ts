import { RouterModule, Routes } from '@angular/router';

import { BindComponent } from './bind/bind.component';
import { HudComponent } from './hud/hud.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bind', component: BindComponent },
  { path: 'hud', component: HudComponent, canActivate: [AuthGuardService] },
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
