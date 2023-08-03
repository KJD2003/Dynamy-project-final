import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catalogo, category, product } from 'src/app/interfaces/Categories';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  //dichiarazione di tipi di array e string
  products: product[] = [];
  catalogo: catalogo[] = [];
  catalogoFiltrato: product[] = [];
  category: string = '';


  constructor(private commonService: CommonService) { }


  /* Dichiarazione DB */
  ngOnInit(): void {
      this.category = localStorage.getItem('categoria') || '';
      if (this.category) {
        this.getAllCatalogoFromCommonService();
      }
  }

  // private getAllUsersFromCommonService() {
  //   this.commonService.getAllUsers().subscribe(users => {
  //     this.users = users
  //     console.log(this.users);
  //   });

  // }

  //funzione, che, tramite il confronto delle categorie del router e del dbJson crea pagine per la visualizzazione, successivamente, dei prodotti
  private getAllCatalogoFromCommonService() {
    this.commonService.getAllCatalogo().subscribe((catalogo) => {
      this.catalogo = catalogo;
      this.catalogoFiltrato = catalogo.filter(
        (element) => element.category === this.category
      )[0]?.product;
      console.log(this.catalogoFiltrato);
    });
  }
}