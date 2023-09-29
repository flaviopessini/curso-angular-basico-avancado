import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../modules/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
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

  getList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}/list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  foodListAdd(value: string): number {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  foodListAlert(value: string): void {
    this.emitEvent.emit(value);
  }
}
