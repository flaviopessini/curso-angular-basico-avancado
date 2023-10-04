import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ErroComponent } from './pages/erro/erro.component';
import { BuscaComponent } from './pages/busca/busca.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildrenComponent } from './pages/parent/children/children.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'busca/:usuario', component: BuscaComponent },
  {
    path: 'parent',
    component: ParentComponent,
    children: [{ path: 'children/:id', component: ChildrenComponent }],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: 'erro', component: ErroComponent },
  { path: '**', redirectTo: 'erro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
