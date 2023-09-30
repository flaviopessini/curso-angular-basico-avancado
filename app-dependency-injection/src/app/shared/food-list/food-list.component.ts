import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/modules/food-list';
import { FoodListService } from 'src/app/services/food-list-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.getList().subscribe(
      (res) => {
        this.foodList = res;
      },
      (err) => alert(`Erro: ${err}`)
    );
    this.foodListService.emitEvent.subscribe(
      (res) => {
        alert(`Você adicionou ${res.nome}`);
        this.foodList.push(res);
      },
      (err) => alert(`Erro: ${err}`)
    );
  }

  foodListDelete(id: number) {
    if (confirm(`Deseja remover o item?`)) {
      this.foodListService.foodListDelete(id).subscribe(
        (res) => {
          this.foodList = this.foodList.filter((item) => id !== item.id);
        },
        (err) => err
      );
    }
  }

  foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(id, value).subscribe(
      (res) => res,
      (err) => err
    );
  }
}
