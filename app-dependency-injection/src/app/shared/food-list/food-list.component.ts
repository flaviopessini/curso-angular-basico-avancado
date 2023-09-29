import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  foodList: Array<string> = [];

  constructor(private foodServiceService: FoodListService) {}

  ngOnInit(): void {
    this.foodList = this.foodServiceService.getList();
  }
}
