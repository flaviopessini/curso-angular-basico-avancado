import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Output() enviar = new EventEmitter();

  lista: Array<{ nome: string; idade: number }> = [
    { nome: 'Flávio', idade: 29 },
    { nome: 'Flávio', idade: 30 },
    { nome: 'Flávio', idade: 31 },
  ];

  getDados(event: number): void {
    this.enviar.emit(this.lista[event]);
  }
}
