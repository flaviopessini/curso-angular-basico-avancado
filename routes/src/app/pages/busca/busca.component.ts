import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent implements OnInit {
  usuario: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    //
  }

  ngOnInit(): void {
    // http://localhost:4200/sobre/:usuario
    this.activatedRoute.params.subscribe((res) => {
      this.usuario = res['usuario'];
      console.log(this.usuario);
    });

    // http://localhost:4200/sobre/:usuario?cliente=nomecliente
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(res);
    });

    // Redirecionamento
    setInterval(() => {
      // Navega sem reload na página, igual ao uso do [routerLink]="['/']" no html.
      this.router.navigate(['404']);

      // Navega com reload da página, como se fosse o uso do href="/" no html.
      //this.router.navigateByUrl('404');
    }, 3000);
  }
}
