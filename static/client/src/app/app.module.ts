import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { BindComponent } from './bind/bind.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './ctrls/navbar/navbar.component';
import { MsgbarComponent } from './ctrls/msgbar/msgbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    HomeComponent,
    NavbarComponent,
    MsgbarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
