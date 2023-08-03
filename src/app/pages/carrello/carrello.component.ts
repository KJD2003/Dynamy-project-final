import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { catalogo, product } from 'src/app/interfaces/Categories';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss'],
})
export class CarrelloComponent {
  items: BehaviorSubject<any> = new BehaviorSubject([]);
  
  faTrash = faTrash;

  Incart: product[] = [];

  catalogo: catalogo[] = [];

  totaleProvvisorio: number = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.items.subscribe((valoriAggiornatiItems) => {
      this.Incart = valoriAggiornatiItems;
      this.calcolaTotaleProvvisorio();
    });
  }

  calcolaTotaleProvvisorio(): void {
    this.totaleProvvisorio = this.Incart.reduce((acc, item) => acc + item.price, 0);
  }
  //  clearCart(): product[]{
  //    this.Incart = [];
  //    return this.Incart;
  //  }

  getTotalPrice(): number {

    let total = 0;

    for (const Incart of this.Incart) {

      total += Incart.price * Incart.quantity;

    }

    return total;

  }

  clearCart(): void {
    this.Incart = [];
    this.cartService.clearCart();
  }

  goToPage(category: string) {
    localStorage.setItem('register', category);
    this.router.navigateByUrl(category);
  }

  removeProduct(product: product): void {
    this.cartService.removeProduct(product);
  }

}
