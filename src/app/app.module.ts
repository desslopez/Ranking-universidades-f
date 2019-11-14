import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';

import { MenuComponent} from './componentes/menu/menu.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ActualizarDatosComponent } from './componentes/actualizar-datos/actualizar-datos.component';
import { TodosLosPatronesComponent } from './componentes/patrones/todos-los-patrones/todos-los-patrones.component';
import { GlosarioComponent } from './componentes/patrones/glosario/glosario.component';
import { UnAttComponent } from './componentes/patrones/un-att/un-att.component';
import { DosAttComponent } from './componentes/patrones/dos-att/dos-att.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProyectoComponent,
    PrincipalComponent,
    NosotrosComponent,
    ActualizarDatosComponent,
    TodosLosPatronesComponent,
    GlosarioComponent,
    UnAttComponent,
    DosAttComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
