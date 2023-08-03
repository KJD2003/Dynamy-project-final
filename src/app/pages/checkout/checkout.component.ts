import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faApplePay, faCcAmex, faGooglePay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { product } from 'src/app/interfaces/Categories';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  Incart: product[] = [];
  totaleProvvisorio: number = 0;

  faPaypal = faPaypal;
  faGooglePay = faGooglePay;
  faApplePay = faApplePay;
  faccAmex= faCcAmex;


  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    // Recupera i prodotti presenti nel carrello
    this.cartService.items.subscribe((valoriAggiornatiItems) => {
      this.Incart = valoriAggiornatiItems;
      this.calcolaTotaleProvvisorio();
    });
  }
//funzione che calcola in base al prezzo, ricavato dal db e dalla quantita il valore totale.
  calcolaTotaleProvvisorio(): void {
    this.totaleProvvisorio = this.Incart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  creaOrdine(): void {
    // Crea uno storico ordine basato sui prodotti presenti nel carrello, e aggiunge un valore della data odierna
    const ordine = {
      data: new Date(),
      prodotti: this.Incart,
      totale: this.totaleProvvisorio
    };

    // Aggiungi l'ordine al servizio OrderService
    this.orderService.addOrder(ordine);

    // Pulisci il carrello
    this.clearCart();

    // Reindirizza alla pagina dello storico ordini
    this.goToCheckout();
  }

  goToCheckout(){
    this.router.navigateByUrl('orderhistory');
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  //serie di funzioni usate nel click paga, dove, rispettivamente, creano l'ordine da mettere nello storico, puliscono il carrello 
  //e mandano con l'auito del router  nello storico
  EseguiFunzioniAlPagamento(){
    this.creaOrdine();
    this.clearCart();
    this.goToCheckout();
  }
}