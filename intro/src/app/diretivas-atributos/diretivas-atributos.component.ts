import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  valor: boolean = true;
  altura: string = '20px';
  backColor: string = 'red';
  nome: string = '';
  lista: Array<{ nome: string }> = [];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
      this.altura = this.altura == '20px' ? '50px' : '20px';
      this.backColor = this.altura == '20px' ? 'blue' : 'red';
    }, 2000);
  }

  adicionarNome(): void {
    this.lista.push({ nome: this.nome });
  }
}
