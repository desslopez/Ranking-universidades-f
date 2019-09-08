import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';

import { MenuComponent} from './componentes/menu/menu.component';

import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProyectoComponent,
    PrincipalComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
