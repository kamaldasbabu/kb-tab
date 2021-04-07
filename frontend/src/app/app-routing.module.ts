import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { DeliveryComponent } from './order/delivery/delivery.component';
import { CancelComponent } from './order/cancel/cancel.component';
import { AllordersComponent } from './order/allorders/allorders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { CustomersComponent } from './customers/customers.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AllrestaurantsComponent } from './allrestaurants/allrestaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderComponent } from './order/order.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PickupComponent } from './order/pickup/pickup.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  
      { path: '', redirectTo:'login', pathMatch: 'full'},
      { path: 'home', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'adminhome', component: AdminhomeComponent },
      { path: 'order', component: OrderComponent, canActivate:[AdminGuard],
        children: [
          { path: 'allorders', component: AllordersComponent },
          { path: 'deliveredorder', component: DeliveryComponent },
          { path: 'cancelorder', component: CancelComponent },
          { path: 'pickuporder', component:PickupComponent }
        ]
      },
      { path: 'addres', component: AddrestaurantComponent },
      { path: 'restaurant', component: RestaurantComponent },
      { path: 'res/:resid', component: RestaurantComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate:[AdminGuard]},
      { path: 'allrestaurant', component: AllrestaurantsComponent, canActivate:[AdminGuard] },
      { path: 'customers', component: CustomersComponent, canActivate:[AdminGuard] },
      { path: 'fooditems', component: FooditemsComponent },
      { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AllComponent =
 [ LoginComponent, 
  PagenotfoundComponent, 
  PickupComponent,
  AddrestaurantComponent

]
