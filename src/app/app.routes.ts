import { RouterModule, Routes } from '@angular/router';

import { MenuComponent} from './componentes/menu/menu.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ActualizarDatosComponent } from './componentes/actualizar-datos/actualizar-datos.component';
import { GlosarioComponent } from './componentes/patrones/glosario/glosario.component';
import { UnAttComponent } from './componentes/patrones/un-att/un-att.component';
import { DosAttComponent } from './componentes/patrones/dos-att/dos-att.component';
const APP_ROUTES: Routes = [
{ path: 'principal', component: ProyectoComponent },
{ path: 'patrones', component: PrincipalComponent, children:[
  { path: 'glosario', component: GlosarioComponent },
  { path: 'unAtt', component: UnAttComponent },
  { path: 'dosAtt', component: DosAttComponent }
] },
{ path: 'nosotros', component: NosotrosComponent },
{ path: 'actualizarDatos', component: ActualizarDatosComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
