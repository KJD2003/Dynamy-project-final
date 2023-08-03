import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter
}
