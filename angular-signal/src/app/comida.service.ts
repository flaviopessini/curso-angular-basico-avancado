import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComidaService {
  comida = signal('Pizza');

  constructor() {}

  updateComida(value: string) {
    this.comida.set(value);
  }
}
