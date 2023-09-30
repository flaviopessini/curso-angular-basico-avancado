import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  listaComidas: Array<{ comida: string; valor: number }> = [
    { comida: 'X-bacon', valor: 14.9 },
    { comida: 'X-salada', valor: 9.9 },
    { comida: 'X-alcatra', valor: 19.9 },
    { comida: 'X-egg', valor: 9.9 },
    { comida: 'X-pizza', valor: 16.9 },
  ];
}
