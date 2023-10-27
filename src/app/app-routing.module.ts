import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  {
    path : "",
    component : DashboardComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"users",
    component: UserComponent
  },
  {
    path:"products",
    component: ProductsComponent
  },
  {
    path:"cart",
    component: CartComponent
  },
  {
    path:"market",
    component:MarketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
