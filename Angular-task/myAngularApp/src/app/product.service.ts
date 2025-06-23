
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  
}


// constructor(private client: HttpClient) {}
// getProductById(id: number): Observable<any> {
//   return this.client.get<any>(`http://localhost:3000/products/${id}`).pipe(
//     catchError(error => {
//       console.error('Product not found:', error);
//       return of(null); // Return an observable with a null value or handle it as needed
//     })
//   );  
// }

// getAllProducts() {
//   return this.client.get("http://localhost:3000/products");
// }

