import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  emitEvent = new EventEmitter();

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

  foodListAdd(value: string): number {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  foodListAlert(value: string): void {
    this.emitEvent.emit(value);
  }
}
