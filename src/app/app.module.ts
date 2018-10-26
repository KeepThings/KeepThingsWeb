import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TestService} from './test.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {UserItemsService} from './user-items.service';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { LoginComponent } from './ui/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './ui/nav/nav.component';
import { FooterComponent } from './ui/footer/footer.component';
import {LayoutComponent} from './ui/layout/layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [TestService, UserItemsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
