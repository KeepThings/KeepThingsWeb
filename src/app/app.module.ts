import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {UserItemsService} from './user-items.service';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { LoginComponent} from './ui/login/login.component';
import {LoginErrorComponent} from './ui/login/login-error/login-error.component';
import {NewEntryFormComponent} from './ui/new-entry-form/new-entry-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './ui/nav/nav.component';
import { FooterComponent } from './ui/footer/footer.component';
import {LayoutComponent} from './ui/layout/layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewRequestFormComponent} from './ui/new-request-form/new-request-form.component';
import {MarketplaceComponent} from './ui/marketplace/marketplace.component';
import {LentOutComponent} from './ui/lent-out/lent-out.component';
import {AuthGuard} from './auth.guard';
import {UIDetailsComponent} from './ui/u-idetails/u-idetails.component';
import {MIDetailsComponent} from './ui/m-idetails/m-idetails.component';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule, MatListModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, NativeDateAdapter, MatDialogModule } from '@angular/material';
import {DatePipe} from '@angular/common';
import {UserSettingsComponent} from './ui/user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    LayoutComponent,
    NewEntryFormComponent,
    NewRequestFormComponent,
    MarketplaceComponent,
    LentOutComponent,
    LoginErrorComponent,
    UIDetailsComponent,
      MIDetailsComponent,
      UserSettingsComponent,
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
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [ UserItemsService, UserService, AuthGuard, NavComponent, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [LoginErrorComponent, UIDetailsComponent, MIDetailsComponent, UserSettingsComponent]
})
export class AppModule {


}
