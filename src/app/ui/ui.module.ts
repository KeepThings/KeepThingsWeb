import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewUserComponent],
  exports: []
})
export class UiModule { }
