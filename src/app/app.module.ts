import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { IgPartComponent } from './components/ig-part/ig-part.component';
import { HomeComponent } from './pages/home/home.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { LoginComponent } from './pages/login/login.component';
import { IntestazioneComponent } from './components/intestazione/intestazione.component';
import { BrPersonalisedComponent } from './components/br-personalised/br-personalised.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EcologicoComponent } from './components/ecologico/ecologico.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';
import { DividerNavbarComponent } from './components/divider-navbar/divider-navbar.component';
import { ProdottoSingoloComponent } from './pages/prodotto-singolo/prodotto-singolo.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { CoockieModalComponent } from './components/coockie-modal/coockie-modal.component';
import { ScrollTopDownComponent } from './components/scroll-top-down/scroll-top-down.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    ProductsComponent,
    IgPartComponent,
    HomeComponent,
    Navbar2Component,
    LoginComponent,
    IntestazioneComponent,
    BrPersonalisedComponent,
    CarouselComponent,
    EcologicoComponent,
    Carousel2Component,
    DividerNavbarComponent,
    ProdottoSingoloComponent,
    CheckoutComponent,
    ProfileComponent,
    OrderHistoryComponent,
    CoockieModalComponent,
    ScrollTopDownComponent,
    ProductComponent,
    RegisterComponent,
    CatalogoComponent,
    CarrelloComponent,


 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
