import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private redirectUrl: string = '';
  private productToBeAddedAfterLogin: number | null = null;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`http://localhost:3000/users?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length > 0) {
            this.isLoggedIn = true;
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('user', JSON.stringify(users[0]));
            return true;
          } else {
            console.error('Invalid username or password');
            return false;
          }
        }),
        catchError(error => {
          console.error('Login failed', error);
          return throwError(error);
        })
      );
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || localStorage.getItem('loggedIn') === 'true';
  }

  checkLoginStatus(): boolean {
    return this.isLoggedIn;
  }

  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setProductToBeAddedAfterLogin(productId: number) {
    this.productToBeAddedAfterLogin = productId;
  }

  getProductToBeAddedAfterLogin(): number | null {
    return this.productToBeAddedAfterLogin;
  }

  clearProductToBeAddedAfterLogin() {
    this.productToBeAddedAfterLogin = null;
  }
}
