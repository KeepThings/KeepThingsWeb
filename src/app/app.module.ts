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
import {NewEntryFormComponent} from './ui/new-entry-form/new-entry-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './ui/nav/nav.component';
import { FooterComponent } from './ui/footer/footer.component';
import {LayoutComponent} from './ui/layout/layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NewRequestFormComponent} from './ui/new-request-form/new-request-form.component';
import {MarketplaceComponent} from './ui/marketplace/marketplace.component';
import {LentOutComponent} from './ui/lent-out/lent-out.component';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';

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
    LentOutComponent
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
    MatListModule

  ],
  providers: [TestService, UserItemsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
