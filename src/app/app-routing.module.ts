import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './ui/dashboard/dashboard.component';
import {LoginComponent} from './ui/login/login.component';
import {AuthGuard} from './auth.guard';
import {UIDetailsComponent} from './ui/u-idetails/u-idetails.component';
import {RegisterComponent} from './ui/register/register.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
