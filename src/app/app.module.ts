import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as feather from 'feather-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {FooterComponent} from './component/footer/footer.component';
import {CardComponent} from './component/card/card.component' ;
import {CardRowComponent} from './component/card-row/card-row.component' ;
import {MovementComponent} from './component/movement/movement.component' ;
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { MarketComponent } from './market/market.component';
import { ProfileComponent } from './profile/profile.component';
import { EdituserComponent } from './edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    CardComponent,
    CardRowComponent,
    MovementComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ProductsComponent,
    CartComponent,
    MarketComponent,
    ProfileComponent,
    MarketComponent,
    CartComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
