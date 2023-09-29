import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss'],
})
export class DatabindingComponent implements OnInit {
  nome: string = 'Flávio';
  idade: number = 29;
  desabilitado = false;
  urlImagem: string =
    'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  urlAlt: string = 'Logo do Angular';
  mousePosition: { x: number; y: number } = { x: 0, y: 0 };
  inputNome: string = '';

  ngOnInit(): void {}

  cliquei(valor?: string): void {
    alert(valor || 'Cliquei...');
  }

  mouseMoveTest(event: MouseEvent) {
    this.mousePosition.x = event.offsetX;
    this.mousePosition.y = event.offsetY;
    console.log(this.mousePosition);
  }
}
