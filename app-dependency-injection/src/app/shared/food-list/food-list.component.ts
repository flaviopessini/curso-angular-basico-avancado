import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/modules/food-list';
import { FoodListService } from 'src/app/services/food-list-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  foodList: FoodList | any;

  constructor(private foodServiceService: FoodListService) {}

  ngOnInit(): void {
    this.foodServiceService.getList().subscribe(
      (res) => {
        this.foodList = res;
      },
      (err) => alert(`Erro: ${err}`)
    );
    this.foodServiceService.emitEvent.subscribe(
      (res) => alert(`Você adicionou ${res}`),
      (err) => alert(`Erro: ${err}`)
    );
  }
}
