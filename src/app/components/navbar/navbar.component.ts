import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { category } from 'src/app/interfaces/Categories';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faSearch = faSearch;
  faBars = faBars;
  isLogged: boolean = false;
  Categories: category[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, public commonService: CommonService) {
  this.isLogged = !!localStorage.getItem('Token');
  this.commonService.isLogged.subscribe((res) => {
    this.isLogged = res;
  });
}
  logout() {
    localStorage.setItem('isLogged', this.isLogged.toString());
  localStorage.removeItem('Token');
  this.commonService.isLogged.next(false);
  this.router.navigate(['']);
  }

  goToPage(category: string) {
    localStorage.setItem('categoria', category);
    this.router.navigateByUrl(category);
  }
  ngOnInit() {
    // Recupera lo stato di isLogged dal LocalStorage se è presente
    const isLoggedString = localStorage.getItem('isLogged');
    if (isLoggedString) {
      this.isLogged = isLoggedString === 'true';
      this.commonService.isLogged.next(this.isLogged);
    }
    this.getAllCategoriesFromCommonService();
  }
  private getAllCategoriesFromCommonService() {
    this.commonService
      .getAllCategories()
      .subscribe((Categories) => (this.Categories = Categories));
    console.log(this.Categories);
  }
}
