import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheck, faCookieBite, faQuestion, faX } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-coockie-modal',
  templateUrl: './coockie-modal.component.html',
  styleUrls: ['./coockie-modal.component.scss']
})
export class CoockieModalComponent {
faCookieBite = faCookieBite;
faQuestion = faQuestion;
faCheck = faCheck;
faX = faX;


constructor(
  private router: Router,
  public commonService: CommonService
) {}

//funzione "logout()": rimuove il Token dal local storage e setta nel commonservice isLogged a "False"
logout() {
  localStorage.removeItem('Token');
  this.commonService.isLogged.next(false);
  this.router.navigate(['']);
}
}
