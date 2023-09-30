import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../modules/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private url: string = 'http://localhost:3000';
  emitEvent = new EventEmitter();

  private list: Array<string> = [
    'X-bacon',
    'X-salada',
    'X-egg',
    'X-família',
    'X-pizza',
  ];

  constructor(private http: HttpClient) {}

  // getList(): string[] {
  //   return this.list;
  // }

  getList(): Observable<Array<FoodList>> {
    return this.http
      .get<Array<FoodList>>(`${this.url}/list-food`, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  foodListAdd(value: string): Observable<FoodList> {
    return this.http
      .post<FoodList>(
        `${this.url}/list-food`,
        { nome: value },
        this.httpOptions
      )
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  foodListEdit(id: number, value: string): Observable<FoodList> {
    return this.http
      .put<FoodList>(
        `${this.url}/list-food/${id}`,
        { nome: value },
        this.httpOptions
      )
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  foodListDelete(id: number): Observable<FoodList> {
    return this.http
      .delete<FoodList>(`${this.url}/list-food/${id}`, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  foodListAlert(value: FoodList): void {
    this.emitEvent.emit(value);
  }
}
