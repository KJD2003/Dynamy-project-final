import { Component } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.scss']
})
export class Carousel2Component {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
}
