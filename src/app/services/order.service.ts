// order.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from 'src/app/interfaces/Categories';

@Injectable({
  providedIn: 'root'
})

//OrderService, gestisce un elenco di ordini usando un BehaviorSubject, e fornisce metodi per ottenere gli ordini correnti e aggiungere nuovi ordini all'elenco.
export class OrderService {
  private orders: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  //restituisce una lista di ordini come un Observable, consentendo ad altre parti dell'applicazione di osservare e ricevere gli aggiornamenti degli ordini
  getOrders(): BehaviorSubject<any[]> {
    return this.orders;
  }

  //aggiunge modificando il currentOrders prendendo quei determinati prodotti dal checkout
  addOrder(order: any): void {
    const currentOrders = this.orders.getValue();
    currentOrders.push(order);
    this.orders.next(currentOrders);
  }
}