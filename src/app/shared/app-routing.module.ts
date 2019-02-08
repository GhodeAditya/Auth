import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent} from '../signup/signup.component';
import { HomeComponent} from '../home/home.component'
import { AuthGuardService } from './auth-guard.service';
import { OrdersComponent } from '../home/orders/orders.component';
import { AdminComponent } from '../admin/admin.component'

const appRoutes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent, pathMatch: 'full', canActivate:[] },
  { path: 'admin', component: AdminComponent }    
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule {
 }
