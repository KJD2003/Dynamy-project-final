import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catalogo, product } from 'src/app/interfaces/Categories';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private commonService: CommonService,private cartService: CartService, private router:Router,) {}

  products: product[] = [];
  catalogo: catalogo[] = [];
  catalogoFiltrato: product[] = [];
  category: string = '';
  selectedProduct: any

//recupera il valore della chiave di "categori" dal localStorage, verifica se esiste una categoria selezionata, e se presente,
// chiama un metodo per ottenere il catalogo corrispondente utilizzando il servizio CommonService.
  ngOnInit(): void {
    this.category = localStorage.getItem('categoria') || '';
    if (this.category) {
      this.getAllCatalogoFromCommonService();
    }
  }

    //basati su quel determinato nome della categoria e iterala in base al nome che hai nel dbjson, facendo vedere l'array di prodotti che hai
  private getAllCatalogoFromCommonService() {
    this.commonService.getAllCatalogo().subscribe((catalogo) => {
      this.catalogo = catalogo;
      this.catalogoFiltrato = catalogo.filter(
        (element) => element.category === this.category
      )[0].product;
      console.log(this.catalogoFiltrato);
    });
  }

  //vai alla page della rotta con "prodotto-singolo" ricordala anche nel localStorage
  goToProductDetail(product: product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigateByUrl('/prodotto-singolo');
  }

 //possibilità di aggiungere il prodotto dalla card product nel carrello
  addToCart(product : product) {
    this.cartService.addToCart(product);
    window.alert('Prodotto aggiunto al carrello!');
  }
 
}
