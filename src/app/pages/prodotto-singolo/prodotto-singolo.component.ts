import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { HttpClient } from '@angular/common/http';
import { catalogo, product } from 'src/app/interfaces/Categories';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-prodotto-singolo',
  templateUrl: './prodotto-singolo.component.html',
  styleUrls: ['./prodotto-singolo.component.scss']
})
export class ProdottoSingoloComponent implements OnInit {

  selectedProduct: any;   
  
  products: product[] = [];
  catalogo: catalogo[] = [];
  catalogoFiltrato: product[] = [];
  category: string = '';  
  baseUrl: any;

  constructor(private router: Router, private commonservice: CommonService, private http: HttpClient,  private route: ActivatedRoute,
    private cartService: CartService) {}

//Recupera un oggetto product dal localStorage e lo assegna a selectedProduct.
  ngOnInit() {
    const product = localStorage.getItem('selectedProduct');
    this.selectedProduct = product ? JSON.parse(product) : null;
  }

//Salva l'oggetto product selezionato nel localStorage e naviga verso la pagina con la rotta: "/prodotto-singolo".
  goToProductDetail(product: product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigateByUrl('/prodotto-singolo');
  }

  //Effettua una richiesta "get" a quel determinato url con rotta: /products per ottenere un array di oggetti di tipo Product.
  getAllProductsById(){
  return this.http.get<any[]>(`${this.baseUrl}/products`);
}

//funzione che aggiunge alla pagina carrello il determinato prodotto visualizzato, e che in ogni caso faccia comparire un alert
addToCart(product : product) {
  this.cartService.addToCart(product);
  window.alert('Prodotto aggiunto al carrello!');
}
}
