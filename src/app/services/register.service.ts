import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private datiRegistrati : any [] = [];
 

  constructor(private Http: HttpClient) {
  }
//Registra un nuovo utente aggiungendo i dati forniti a un array. Invia una richiesta post per salvare i dati dell'utente.
//Restituisce un Observable per gestire la risposta della richiesta
  registrazioneUtente(data:any):Observable<any>{
    this.datiRegistrati.push(data);
    return this.Http.post('/api/users', data)
  }

  //Restituisce un Observable con una copia dell'array di dati degli utenti registrati utilizzandolo per ottenere i dati degli utenti.
  getdatiRegistrati(): Observable<any[]>{
    return of (this.datiRegistrati)
  }

}
