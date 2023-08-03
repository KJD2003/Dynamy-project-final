import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { category, product } from 'src/app/interfaces/Categories';
import { faBars, faDashboard, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss'],
})
export class Navbar2Component {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faSearch = faSearch;
  faBars = faBars;
  isLogged: boolean = false;
  Categories: category[] = [];
  
// il costruttore inizializza la variabile isLogged con il valore corrente salvato nel localStorage, viene visto dall'observable, cossichè
// l' "isLogged" del CommonService sia informato di eventuali cambiamenti futuri nel valore di autenticazione, ad esempio quando un utente
// effettua il login o il logout nell'applicazione.
  constructor(private activatedRoute: ActivatedRoute, private router: Router, public commonService: CommonService) {
  this.isLogged = !!localStorage.getItem('Token');
  this.commonService.isLogged.subscribe((res) => {
    this.isLogged = res;
  });
}
//funzione che setta "isLogged", inizializzato già da prima come boolean "false", 
  logout() {
    localStorage.setItem('isLogged', this.isLogged.toString());
  localStorage.removeItem('Token');
  this.commonService.isLogged.next(false);
  this.router.navigate(['']);
  }
//funzione che usa il  router per navigare nelle pagine
  goToPage(category: string) {
    localStorage.setItem('categoria', category);
    this.router.navigateByUrl(category);
  }

  //il metodo "ngOnInit()" recupera il valore di autenticazione dal localStorage,
  // lo aggiorna nel servizio CommonService, e quindi recupera tutte le categorie utilizzando sempre il commonService.
  ngOnInit() {
    // Recupera lo stato di isLogged dal LocalStorage se è presente

    const isLoggedString = localStorage.getItem('isLogged');
    if (isLoggedString) {
      this.isLogged = isLoggedString === 'true';
      this.commonService.isLogged.next(this.isLogged);
    }
    this.getAllCategoriesFromCommonService();
  }
  //funzione che assegna le varie categorie in base a quelle che abbiamo nel dbjson
  private getAllCategoriesFromCommonService() {
    this.commonService
      .getAllCategories()
      .subscribe((Categories) => (this.Categories = Categories));
    console.log(this.Categories);
  }
}
