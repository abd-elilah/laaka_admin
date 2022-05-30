import { AgentModule } from './agent/agent.module';
import { AuthenticatModule } from './Authenticat/authenticat.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [

    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticatModule,
    AgentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
