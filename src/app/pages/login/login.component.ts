import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  constructor(private commonService: CommonService, private router: Router) {}

  //funzione che riestituisce nel localstorage un Token, e naviga sulla pagina predefinita (in questo caso dashboard).
  onClick() {
    this.commonService.login().subscribe((res) => {
      if (res.token) {
        localStorage.setItem('Token', res.token);
        this.commonService.isLogged.next(true);
        this.router.navigateByUrl('');
      }
    });
  }


  goToRegister(page: string) {

    this.router.navigateByUrl('register');
  }
}
