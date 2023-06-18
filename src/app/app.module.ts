import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compomnents/navbar/navbar.component';
import { HomeComponent } from './compomnents/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './compomnents/login/login.component'
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SingupComponent } from './compomnents/singup/singup.component';
import { HttpClientModule } from '@angular/common/http';
import { SingupService } from './service/singup.service';
import {MatCardModule} from '@angular/material/card';
import { authInterceptorProviders } from './service/auth.interceptor';
import { AdminDashComponent } from './compomnents/admin/admin-dash/admin-dash.component';
import { UserDashComponent } from './compomnents/user/user-dash/user-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    AdminDashComponent,
    UserDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
   FormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule
 
  ],
  providers: [MatSnackBarModule, SingupService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
