import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list-service.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent {
  constructor(private foodListService: FoodListService) {}

  listAddItem(value: string) {
    return this.foodListService.foodListAdd(value).subscribe(
      (res) => {
        this.foodListService.foodListAlert(res);
      },
      (err) => err
    );
  }
}
