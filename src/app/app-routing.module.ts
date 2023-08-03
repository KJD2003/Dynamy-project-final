import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { ProdottoSingoloComponent } from './pages/prodotto-singolo/prodotto-singolo.component';
import { RegisterComponent } from './pages/register/register.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'Abbigliamento', component: ProductsComponent },
  { path: 'Alimentazione', component: ProductsComponent },
  { path: 'Uomo', component: ProductsComponent },
  { path: 'Donna', component: ProductsComponent },
  { path: 'Barrette proteiche', component: ProductsComponent },
  { path: 'Pasti pronti', component: ProductsComponent },
  { path: 'Cura personale', component: ProductsComponent },
  { path: 'Proteine', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'orderhistory', component: OrderHistoryComponent },
  { path: 'prodotto', component: ProdottoSingoloComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'prodotto-singolo', component: ProdottoSingoloComponent },
  { path: 'carrello', component: CarrelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
