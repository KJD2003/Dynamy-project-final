import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseUrl = '/api/';
  isLogged = new Subject<boolean>

  // Ottieni tutti i prodotti
  getProduct(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }

  // Ottieni un singolo prodotto per ID
  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/${productId}`);
  }
  getAllProducts(): Observable<any[]>{
    const url = "api/products";
    return this.http.get<any[]>(url);
  }
   // Ottieni tutte le categorie
 getCategory(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/categories`);
}
getAllCategory(): Observable<any[]>{
  const url = "api/categories";
  return this.http.get<any[]>(url);
}

// Ottieni tutte le sottocategorie
getsubcategory(): Observable<any[]> {
 return this.http.get<any[]>(`${this.baseUrl}/subcategories`);
}
getAllsubcategory(): Observable<any[]>{
const url = "api/subcategories";
return this.http.get<any[]>(url);
}

constructor(private http: HttpClient ) { }

private carrello: any[] = [];

//effettua una richiesta get all' "/api/login" e restituisce un'`Observable` per gestire la risposta della richiesta.
 login(): Observable<any>{
  const url = '/api/login';
  return this.http.get<any>(url);
 } 
 getCarrello() {
 return this.carrello;
 }
 
 inserisciOrdine(ordine: any){
 this.carrello.push(ordine);
 }
 
 /*eliminaOrdine(prodotto: any) {
 const posizioneProdotto = this.carrello.indexOf(prodotto);
 if (posizioneProdotto>-1) {
 this.carrello.splice(posizioneProdotto, 1);
 } 
 }
 */

// Restituisce tutti gli elementi presenti nell'array XY (prende i dati dal db.json)
getAllUsers(): Observable<any[]>{
  const url = "api/users";
  return this.http.get<any[]>(url);
}

getAllCategories(): Observable<any[]>{
  const url = "api/categories";
  return this.http.get<any[]>(url);
}

getAllCatalogo(): Observable<any[]>{
  const url = "api/catalogo";
  return this.http.get<any[]>(url);
}

getAllsubcategories(): Observable<any[]>{
  const url = "api/subcategories";
  return this.http.get<any[]>(url);
}
}