import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { SobreComponent } from './core/components/sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Início' },
  { path: 'sobre', component: SobreComponent, title: 'Sobre' },
];
