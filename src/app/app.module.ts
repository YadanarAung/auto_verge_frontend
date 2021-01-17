import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicComponent } from './layouts/public/public.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { UsersComponent } from './pages/users/users.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { ServicesComponent } from './pages/services/services.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { UpdateServiceComponent } from './pages/update-service/update-service.component';
import { UpdateBookingComponent } from './pages/update-booking/update-booking.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { NewServiceComponent } from './pages/new-service/new-service.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PublicComponent,
    DashboardComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    VerifyComponent,
    UsersComponent,
    CustomersComponent,
    BookingsComponent,
    ServicesComponent,
    NewUserComponent,
    UpdateUserComponent,
    UpdateCustomerComponent,
    UpdateServiceComponent,
    UpdateBookingComponent,
    NewBookingComponent,
    NewCustomerComponent,
    NewServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
