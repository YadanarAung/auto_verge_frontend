import { UsersComponent } from './pages/users/users.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { UpdateServiceComponent } from './pages/update-service/update-service.component';
import { UpdateBookingComponent } from './pages/update-booking/update-booking.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { NewServiceComponent } from './pages/new-service/new-service.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ServicesComponent } from './pages/services/services.component';
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { AuthGuard } from "./auth.guard";
import { PublicGuard } from "./public.guard";
import { DashboardComponent } from "./layouts/dashboard/dashboard.component";
import { PublicComponent } from "./layouts/public/public.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const publicRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
];

const secureRoutes: Routes = [
  { path: "", component: UsersComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "edit-profile", component: EditProfileComponent },
  { path: "services", component: ServicesComponent },
  { path: "customers", component: CustomersComponent },
  { path: "bookings", component: BookingsComponent },
  { path: "new-user", component: NewUserComponent },
  { path: "new-customer", component: NewCustomerComponent },
  { path: "new-service", component: NewServiceComponent },
  { path: "new-booking", component: NewBookingComponent },
  { path: "update-user/:id", component: UpdateUserComponent },
  { path: "update-customer/:id", component: UpdateCustomerComponent },
  { path: "update-booking/:id", component: UpdateBookingComponent },
  { path: "update-service/:id", component: UpdateServiceComponent },
];

const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    canActivate: [PublicGuard],
    children: publicRoutes
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: secureRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
