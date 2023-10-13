import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getRouteParams } from '../../../helpers/get-route-params';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent implements OnInit {
  id = getRouteParams('id');

  ngOnInit(): void {
    console.log(this.id);
  }
}
