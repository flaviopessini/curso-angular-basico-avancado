import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  foodList: Array<string> = [];

  constructor(private foodServiceService: FoodServiceService) {}

  ngOnInit(): void {
    this.foodList = this.foodServiceService.getList();
  }
}
