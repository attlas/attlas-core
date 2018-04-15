import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { ReferralComponent } from './referral/referral.component';

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
    ReferralComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    FormsModule,
    HttpClientModule,
    routing,
    NgbModule.forRoot()
  ],
  providers:[
    ProgressService,
    BindService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
