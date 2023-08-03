// order-history.component.ts
import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {
  //dichiaro order un array che può avere qualunque tipo di variabile.
  orders: any[] = [];


  // il costruttore del componente inizializza la variabile orders con la lista degli ordini ottenuti dal servizio OrderService
  // una volta ottenuti i dati, l'array degli ordini verrà utilizzato nel componente per visualizzare quelle informazioni
  constructor(private orderService: OrderService) {
    // Ottieni la lista degli ordini dal servizio OrderService
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }
}
