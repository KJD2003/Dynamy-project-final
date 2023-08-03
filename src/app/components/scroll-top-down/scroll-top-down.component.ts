import { Component, HostListener } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-scroll-top-down',
  templateUrl: './scroll-top-down.component.html',
  styleUrls: ['./scroll-top-down.component.scss']
})

export class ScrollTopDownComponent {
  faArrowUp = faArrowUp;
  showButton = false;

  //ascoltatore dell'host, che in questo caso ascolta l'evento di scroll della finestra del browser
  @HostListener('window:scroll', ['$event'])
  //se i pixel sulla coordinata "y" superano i 100 falla comparire
  metodoSuScroll() {
    if (window.scrollY > 100) {
      this.showButton = true;
    } 
    else {
      this.showButton = false;
    }
  }
  //manda all'inizio della pagina
  topFunction() {
    window.scrollTo(0, 0);
  }
}

