import { Component, computed, effect, signal } from '@angular/core';
import { ComidaService } from './comida.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-signal';
  nome = signal('Flávio');
  sobrenome = signal('H Pessini');
  nomeCompleto = computed(() => {
    return this.nome() + ' ' + this.sobrenome();
  });
  array = signal([1]);
  arrayTipado = signal<Array<number>>([1]);

  constructor(public updateService: ComidaService) {
    effect(() => {
      console.log(this.nomeCompleto());

      if (this.array().length > 5) {
        alert('Array atingiu 5');
      }
    });
  }

  updateNome() {
    this.nome.set('oiválF');
    this.sobrenome.set('inisseP H');
  }

  updateNome2() {
    this.nome.update((old) => {
      console.log(old);

      switch (old) {
        case 'oiválF':
          return 'Flávio';
          break;
        case 'Flávio':
          return 'oiválF';
          break;
        default:
          return 'Flávio';
          break;
      }
    });

    this.sobrenome.update((old) => {
      console.log(old);

      switch (old) {
        case 'inisseP H':
          return 'H Pessini';
          break;
        case 'H Pessini':
          return 'inisseP H';
          break;
        default:
          return 'H Pessini';
          break;
      }
    });
  }

  updateArray() {
    this.array.mutate((old) => {
      console.log(old);
      return old.push(Number(old.at(-1)) + 1);
    });
  }
}
