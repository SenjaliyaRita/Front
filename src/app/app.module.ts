import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserItemComponent } from './component/user-list/user-item/user-item.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { GlobalAlertComponent } from './component/shared/global-alert/global-alert.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    UserItemComponent,
    HeaderComponent,
    FooterComponent,
    GlobalAlertComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

