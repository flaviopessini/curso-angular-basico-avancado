import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  private poupanca: number = 50;
  private carteira: number = 10;

  get getPoupanca(): number {
    return this.poupanca;
  }

  get getCateira(): number {
    return this.carteira;
  }

  setSacar(v: string): number | undefined {
    const valor = Number(v);
    if (isNaN(valor)) {
      return;
    }
    if (valor <= this.poupanca) {
      this.poupanca -= valor;
      this.carteira += valor;
    }
    return this.carteira;
  }

  setDepositar(v: string): number | undefined {
    const valor = Number(v);
    if (isNaN(valor)) {
      return;
    }
    if (valor <= this.carteira) {
      this.poupanca += valor;
      this.carteira -= valor;
    }
    return this.poupanca;
  }
}
