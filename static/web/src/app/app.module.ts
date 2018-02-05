import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';

import { ProgressService } from './services/progress.service';
import { MatchDashboardComponent } from './ui/match-dashboard/match-dashboard.component';
import { ErrorMessageComponent } from './ui/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ProgressBarComponent,
    MatchDashboardComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    ProgressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
