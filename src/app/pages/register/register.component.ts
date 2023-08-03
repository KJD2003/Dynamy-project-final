// register.component.ts
import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  pass: string = '';


  constructor(private registerService: RegisterService, private router: Router) { }
//dichiara "nuovoUtente" un array di: name, surname, email e pass (tutti i valori vengono dichiarati prima come string)
  registrati() {
    const nuovoUtente = { name: this.name, surname: this.surname, email: this.email, pass: this.pass};

//la funzione effettua una registrazione di un nuovo utente sul server tramite una chiamata post e gestisce le risposte di successo o errore,
//se la registrazione va a buon fine, vengono ripuliti i campi del modulo di registrazione; in caso di errore, stampa un messaggio di errore sulla console.

    this.registerService.registrazioneUtente(nuovoUtente).subscribe({
      next: () => {
        console.log('Utente registrato con successo!');
        this.name = '';
        this.surname = '';
        this.email = '';
        this.pass = '';
      },
      error: (error: any) => {
        console.error("errore durante la registrazione", error);
      }
    });
     //ipotetica altra funzione: this.registerService.registrazioneUtente(nuovoUtente).subscribe(() => {successo}).catch((err)=> {})
  }

  //funzione che, grazie al router gestisce il cambio delle pagine
  goToPage(category: string) {
    this.router.navigateByUrl(category);
  }
}
