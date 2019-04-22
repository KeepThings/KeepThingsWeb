import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import { NewEntryFormComponent } from './new-entry-form/new-entry-form.component';
import { NewRequestFormComponent } from './new-request-form/new-request-form.component';
import { LentOutComponent } from './lent-out/lent-out.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { LoginErrorComponent } from './login/login-error/login-error.component';
import { UIDetailsComponent } from './u-idetails/u-idetails.component';
import { MIDetailsComponent } from './m-idetails/m-idetails.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesReplyComponent } from './messages-reply/messages-reply.component';
import { RegisterComponent } from './register/register.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessagesComponent, MessagesReplyComponent, RegisterComponent, CallbackComponent],
  exports: []
})
export class UiModule { }
