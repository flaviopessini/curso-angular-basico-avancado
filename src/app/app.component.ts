import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  title = 'curso-angular-basico-avancado';

  constructor() {}

  ngOnInit(): void {
    /**
     * Este evento é inicializado após o Angular exibir pela primeira vez as propriedades
     * vinculadas aos dados ou quando o componente foi inicializado.
     * Este evento é usado principalmente para inicializar dados em um componente.
     */
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    /**
     * Este evento é executado sempre que um valor de um controle de entrada dentro do
     * componente é alterado.
     * Sempre que um componente recebe um dado através do @Input() o ngOnChanges()
     * é invocado.
     */
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    /**
     * Chamado antes do Angular destruir o componente.
     */
    console.log('ngOnDestroy');
  }

  ngDoCheck(): void {
    /**
     * Este evento é disparado sempre que as propriedades de entrada de um componente são verificadas.
     */
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    /**
     * Este método é executado quando o Angular realizar qualquer projeção de conteúdo nas visualizações
     * do componente.
     */
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    /**
     * Este método é executado sempre que o conteúdo do componente é verificado pelo
     * mecanismo de detecção de alteração do Angular.
     */
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    /**
     * Este método é executado quando a visualização do componente foi totalmente
     * inicializada.
     */
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    /**
     * Este método é executado toda vez que a visualização de um determinado componente
     * foi verificada pelo algoritmo de detecção de alterações do Angular.
     */
    console.log('ngAfterViewChecked');
  }
}
