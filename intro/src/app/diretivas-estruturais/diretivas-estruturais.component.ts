import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  condition: boolean = true;
  conditionClick: boolean = true;
  lista: Array<{ nome: string }> = [
    { nome: 'Curso' },
    { nome: 'Angular' },
    { nome: '15+' },
  ];
  listaVendas: Array<{ prod: string; valor: number }> = [
    { prod: 'Produto 1', valor: 99.9 },
    { prod: 'Produto 2', valor: 34.57 },
    { prod: 'Produto 3', valor: 14.5 },
  ];
  status: string = 'Aberto';

  ngOnInit(): void {
    setInterval(() => {
      this.condition = this.condition ? false : true;
    }, 2000);
  }

  onClick(): void {
    this.conditionClick = !this.conditionClick;
  }

  onClickAdd(): void {
    this.listaVendas.push({
      prod: 'Produto ' + this.listaVendas.length,
      valor: Math.random(),
    });
  }

  onClickEventList(id: number): void {
    this.listaVendas.splice(id, 1);
  }

  onClickAlterarStatus(): void {
    this.status = 'Concluído';
  }
}
