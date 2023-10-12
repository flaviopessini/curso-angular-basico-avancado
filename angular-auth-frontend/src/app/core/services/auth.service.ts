import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = ' http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  signin(payload: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}/sign`, payload).pipe(
      map((data) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', data.token);
        return this.router.navigate(['admin']);
      }),
      catchError((err) => {
        localStorage.removeItem('access_token');
        if (err.error.message) {
          return throwError(() => err.error.message);
        }

        return throwError(() => 'Erro interno do servidor');
      })
    );
  }

  logout(): any {
    localStorage.removeItem('access_token');
    return this.router.navigate(['']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return false;
    }
    const jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(token);
  }
}
