import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CallbackComponent],
  exports: []
})
export class UiModule { }
