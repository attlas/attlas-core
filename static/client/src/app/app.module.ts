import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { BindComponent } from './bind/bind.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './ctrls/navbar/navbar.component';
import { MsgbarComponent } from './ctrls/msgbar/msgbar.component';
import { ProgressBarComponent } from './ctrls/progress-bar/progress-bar.component';
import { ErrorPanelComponent } from './ctrls/error-panel/error-panel.component';

import { ProgressService } from './services/progress.service';
import { BindService } from './services/bind.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoadingPanelComponent } from './ctrls/loading-panel/loading-panel.component';
import { NavPanelComponent } from './ctrls/nav-panel/nav-panel.component';
import { HudComponent } from './hud/hud.component';
import { FeedComponent } from './feed/feed.component';
import { LiquidityComponent } from './apps/liquidity/liquidity.component';
import { PatronComponent } from './apps/patron/patron.component';
import { ReferralComponent } from './apps/referral/referral.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    HomeComponent,
    NavbarComponent,
    MsgbarComponent,
    ProgressBarComponent,
    ErrorPanelComponent,
    LoadingPanelComponent,
    NavPanelComponent,
    HudComponent,
    FeedComponent,
    LiquidityComponent,
    PatronComponent,
    ReferralComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    ProgressService,
    BindService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
