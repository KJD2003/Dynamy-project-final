import { product } from 'src/app/interfaces/Categories';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  private cartLocalStorageKey = 'cart'
  items: BehaviorSubject<any> = new BehaviorSubject([]);


  constructor(){
    this.loadCartFromLocalStorage();
   }

   // queste funzioni permettono di caricare il carrello degli acquisti da localStorage al momento dell'inizializzazione della classe e di salvare
   // il carrello nel localStorage quando necessario, consentendo di mantenere il carrello anche dopo che l'utente ha chiuso e riaperto il browser o la pagina.
   private loadCartFromLocalStorage(): void {
    const savedCart = localStorage.getItem(this.cartLocalStorageKey);
    if (savedCart) {
      const cart: product[] = JSON.parse(savedCart);
      this.items.next(cart);
    }
  }
   private saveCartToLocalStorage(cart: product[]): void {
    localStorage.setItem(this.cartLocalStorageKey, JSON.stringify(cart));
  }

addToCart(product: product) {
  //Crea una copia dell'array dei prodotti nel carrello
  const items: product[] = this.items.value;
  // Crea un nuovo oggetto item copiando tutte le proprietà del prodotto passato come parametro e impostando la quantità iniziale a 1.
  const item:any = {
    ...product,
    quantita: 1
  };
  //Aggiunge il nuovo oggetto item all'array del carrello.
  items.push(item);
  //Aggiorna lo stato del carrello utilizzando l'Observable items con la nuova copia dell'array contenente il prodotto aggiunto.
  this.items.next(items);
  //Salva l'array aggiornato nel localStorage, in modo che il carrello venga mantenuto anche dopo che l'utente ha chiuso e riaperto il browser o la pagina.
  this.saveCartToLocalStorage(items);

}

//prende il valore dei prodotti
getProducts() {
  return this.items.value;
}



  clearCart(): void {
    this.items.next([]); // Aggiorna il BehaviorSubject con un array vuoto per svuotare il carrello
    this.saveCartToLocalStorage([]); //salva il carrello nel localstorage, in modo tale da non rendere la funzione fittizia all'aggiornamento della pagina
  }

  //rimuove il prodotto specificato dal carrello, aggiornando sia lo stato dell'applicazione che il localStorage per mantenere il carrello aggiornato.
  removeProduct(product: product): void {
    const items: product[] = this.items.value;
    const index = items.findIndex(item => item.id_product === product.id_product);
    if (index !== -1) {
      items.splice(index, 1);
      this.items.next(items);
      this.saveCartToLocalStorage(items);
    }
  }

// private saveCartData(){
//   const cartDataString = JSON.stringify(this.items);
//   localStorage.setItem(this.cartLocalStorageKey, cartDataString)
//   }
/* . . . */
}

