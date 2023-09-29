import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  private list: Array<string> = [
    'X-bacon',
    'X-salada',
    'X-egg',
    'X-família',
    'X-pizza',
  ];

  constructor() {}

  getList(): string[] {
    return this.list;
  }
}
