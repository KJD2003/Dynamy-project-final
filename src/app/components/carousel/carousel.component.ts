import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faExpandArrowsAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { category, product } from 'src/app/interfaces/Categories';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  faArrowRight = faArrowRight
  faCartShopping = faCartShopping
  faHeart = faHeart
  faExpandArrowsAlt = faExpandArrowsAlt
  categories: category[] = [];
  products: product[] = [];
  //sortingForm: FormGroup = this.formBuilder.group({ sortingCriteria: ['default'] });
  constructor(private commonService: CommonService, private formBuilder: FormBuilder, private router: Router) {
  }
  ngOnInit() {
    // this.getAllProductsFromCommonService();{
    //   this.sortingForm.valueChanges.subscribe(() => {
    //     this.loadProducts()
    //   })
    // }
  }
  // private getAllProductsFromCommonService(): void {
  //   this.commonService.getCategory().subscribe((categories: any) => {
  //     this.categories = categories;
  //     console.log(this.categories);
  //     this.loadProducts();
  //   });
  // }
  // loadProducts() {
  //   this.commonService.getProduct().subscribe((data: product[]) => {
  //     this.products = data;
  //   });
  // }
  // goToPage( page: string) {
  //   this.router.navigateByUrl(page);
  // }

  //Grazie al routing questa funzione riesce a navigare tra le pagine
  goToPage(page: string) {
    this.router.navigateByUrl(page);
  }
}