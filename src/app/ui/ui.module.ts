import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import { NewEntryFormComponent } from './new-entry-form/new-entry-form.component';
import { NewRequestFormComponent } from './new-request-form/new-request-form.component';
import { LentOutComponent } from './lent-out/lent-out.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, LoginComponent, FooterComponent, NewEntryFormComponent, NewRequestFormComponent, LentOutComponent, MarketplaceComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
