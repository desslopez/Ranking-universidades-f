import { RouterModule, Routes } from '@angular/router';

import { MenuComponent} from './componentes/menu/menu.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

const APP_ROUTES: Routes = [
{ path: 'acercade', component: ProyectoComponent },
{ path: 'principal', component: PrincipalComponent },
{ path: 'nosotros', component: NosotrosComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
