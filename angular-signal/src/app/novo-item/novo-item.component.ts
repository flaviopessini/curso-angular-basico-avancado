import { Component } from '@angular/core';
import { ComidaService } from '../comida.service';

@Component({
  selector: 'app-novo-item',
  templateUrl: './novo-item.component.html',
  styleUrls: ['./novo-item.component.scss'],
})
export class NovoItemComponent {
  constructor(public updateService: ComidaService) {}
}
