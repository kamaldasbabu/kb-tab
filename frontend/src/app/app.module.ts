
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, AllComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './shared/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TableComponent } from './table/table.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllrestaurantsComponent } from './allrestaurants/allrestaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderComponent } from './order/order.component';
import { UserService } from './services/user.service';
import { DeliveryComponent } from './order/delivery/delivery.component';
import { CancelComponent } from './order/cancel/cancel.component';
import { AllordersComponent } from './order/allorders/allorders.component';
import { CustomersComponent } from './customers/customers.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { RestaurantService } from './services/restaurant.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AdminhomeComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    NavComponent,
    DashboardComponent,
    AllrestaurantsComponent,
    RestaurantComponent,
    OrderComponent,
    DeliveryComponent,
    CancelComponent,
    AllordersComponent,
    CustomersComponent,
    FooditemsComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule
    
    
  ],
  providers: [UserService, RestaurantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
