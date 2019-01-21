import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppService } from './shared/app.service';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './home/orders/orders.component';
import { AdminComponent } from './admin/admin.component';
import {FileUploadModule} from 'primeng/fileupload';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    OrdersComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [AppService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
