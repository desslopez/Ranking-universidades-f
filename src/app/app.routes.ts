import { RouterModule, Routes } from '@angular/router';

import { MenuComponent} from './componentes/menu/menu.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { H5IndexComponent} from './componentes/patrones/h5-index/h5-index.component';
import {IntCol2018Component} from './componentes/patrones/int-col2018/int-col2018.component';
import{IntCol2017Component} from './componentes/patrones/int-col2017/int-col2017.component';
import{IntCol2016Component} from './componentes/patrones/int-col2016/int-col2016.component';
import {AcaCol2018Component} from './componentes/patrones/aca-col2018/aca-col2018.component';
import {AcaCol2017Component} from './componentes/patrones/aca-col2017/aca-col2017.component';
import {AcaCol2016Component} from './componentes/patrones/aca-col2016/aca-col2016.component';
import {Pub2018Component} from './componentes/patrones/pub2018/pub2018.component';
import {Pub2017Component} from './componentes/patrones/pub2017/pub2017.component';
import {Pub2016Component} from './componentes/patrones/pub2016/pub2016.component';
import {Cit2018Component} from './componentes/patrones/cit2018/cit2018.component';
import {Cit2017Component} from './componentes/patrones/cit2017/cit2017.component';
import {Cit2016Component} from './componentes/patrones/cit2016/cit2016.component';
import { FwCitImp2018Component } from './componentes/patrones/fw-cit-imp2018/fw-cit-imp2018.component';
import { FwCitImp2017Component } from './componentes/patrones/fw-cit-imp2017/fw-cit-imp2017.component';
import { FwCitImp2016Component } from './componentes/patrones/fw-cit-imp2016/fw-cit-imp2016.component';
import { PubTCP2018Component } from './componentes/patrones/pub-tcp2018/pub-tcp2018.component';
import { PubTCP2017Component } from './componentes/patrones/pub-tcp2017/pub-tcp2017.component';
import { PubTCP2016Component } from './componentes/patrones/pub-tcp2016/pub-tcp2016.component';
import { PubTJP2018Component } from './componentes/patrones/pub-tjp2018/pub-tjp2018.component';
import { PubTJP2017Component } from './componentes/patrones/pub-tjp2017/pub-tjp2017.component';
import { PubTJP2016Component } from './componentes/patrones/pub-tjp2016/pub-tjp2016.component';
import { CitPP2018Component } from './componentes/patrones/cit-pp2018/cit-pp2018.component';
import { CitPP2017Component } from './componentes/patrones/cit-pp2017/cit-pp2017.component';
import { CitPP2016Component } from './componentes/patrones/cit-pp2016/cit-pp2016.component';
import { Authors2018Component } from './componentes/patrones/authors2018/authors2018.component';
import { Authors2017Component } from './componentes/patrones/authors2017/authors2017.component';
import { Authors2016Component } from './componentes/patrones/authors2016/authors2016.component';
import { CitPA2018Component } from './componentes/patrones/cit-pa2018/cit-pa2018.component';
import { CitPA2017Component } from './componentes/patrones/cit-pa2017/cit-pa2017.component';
import { CitPA2016Component } from './componentes/patrones/cit-pa2016/cit-pa2016.component';
import { PubPA2018Component } from './componentes/patrones/pub-pa2018/pub-pa2018.component';
import { PubPA2017Component } from './componentes/patrones/pub-pa2017/pub-pa2017.component';
import { PubPA2016Component } from './componentes/patrones/pub-pa2016/pub-pa2016.component';
import { ActualizarDatosComponent } from './componentes/actualizar-datos/actualizar-datos.component';
const APP_ROUTES: Routes = [
{ path: 'acercade', component: ProyectoComponent },
{ path: 'principal', component: PrincipalComponent, children:[
  { path: 'intCol2018', component: IntCol2018Component},
  { path: 'intCol2017', component: IntCol2017Component},
  { path: 'intCol2016', component: IntCol2016Component},
  { path: 'acaCol2018', component: AcaCol2018Component},
  { path: 'acaCol2017', component: AcaCol2017Component},
  { path: 'acaCol2016', component: AcaCol2016Component},
  { path: 'pub2018', component: Pub2018Component},
  { path: 'pub2017', component: Pub2017Component},
  { path: 'pub2016', component: Pub2016Component},
  { path: 'cit2018', component: Cit2018Component},
  { path: 'cit2017', component: Cit2017Component},
  { path: 'cit2016', component: Cit2016Component},
  { path: 'fwCitImp2018', component: FwCitImp2018Component},
  { path: 'fwCitImp2017', component: FwCitImp2017Component},
  { path: 'fwCitImp2016', component: FwCitImp2016Component},
  { path: 'pubTCP2018', component: PubTCP2018Component},
  { path: 'pubTCP2017', component: PubTCP2017Component},
  { path: 'pubTCP2016', component: PubTCP2016Component},
  { path: 'pubTJP2018', component: PubTJP2018Component},
  { path: 'pubTJP2017', component: PubTJP2017Component},
  { path: 'pubTJP2016', component: PubTJP2016Component},
  { path: 'citPP2018', component: CitPP2018Component},
  { path: 'citPP2017', component: CitPP2017Component},
  { path: 'citPP2016', component: CitPP2016Component},
  { path: 'authors2018', component: Authors2018Component},
  { path: 'authors2017', component: Authors2017Component},
  { path: 'authors2016', component: Authors2016Component},
  { path: 'citPA2018', component: CitPA2018Component},
  { path: 'citPA2017', component: CitPA2017Component},
  { path: 'citPA2016', component: CitPA2016Component},
  { path: 'pubPA2018', component: PubPA2018Component},
  { path: 'pubPA2017', component: PubPA2017Component},
  { path: 'pubPA2016', component: PubPA2016Component},
  { path: 'h5Index', component: H5IndexComponent}
] },
{ path: 'nosotros', component: NosotrosComponent },
{ path: 'actualizarDatos', component: ActualizarDatosComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
