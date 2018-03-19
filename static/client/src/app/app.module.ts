import { BrowserModule } from '@angular/platform-browser';
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

import { ProgressService } from './services/progress.service';
import { BindService } from './services/bind.service';


@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    HomeComponent,
    NavbarComponent,
    MsgbarComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    NgbModule.forRoot()
  ],
  providers:[
    ProgressService,
    BindService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
