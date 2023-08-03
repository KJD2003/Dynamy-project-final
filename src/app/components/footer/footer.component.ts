import { Component } from '@angular/core';
import { faFacebook, faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
}
