import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ErroComponent } from './pages/erro/erro.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BuscaComponent } from './pages/busca/busca.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildrenComponent } from './pages/parent/children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ErroComponent,
    MenuComponent,
    BuscaComponent,
    ParentComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
