import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, LoginComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
