import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { StepsComponent } from './home/steps/steps.component';
import { StepComponent } from './home/steps/step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    StepsComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
