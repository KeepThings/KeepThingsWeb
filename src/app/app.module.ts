import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TestService} from './test.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
