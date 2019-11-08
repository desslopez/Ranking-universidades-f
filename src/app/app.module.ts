import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';

import { MenuComponent} from './componentes/menu/menu.component';

import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { H5IndexComponent } from './componentes/patrones/h5-index/h5-index.component';
import { IntCol2018Component } from './componentes/patrones/int-col2018/int-col2018.component';
import { IntCol2017Component } from './componentes/patrones/int-col2017/int-col2017.component';
import { IntCol2016Component } from './componentes/patrones/int-col2016/int-col2016.component';
import { AcaCol2018Component } from './componentes/patrones/aca-col2018/aca-col2018.component';
import { AcaCol2017Component } from './componentes/patrones/aca-col2017/aca-col2017.component';
import { AcaCol2016Component } from './componentes/patrones/aca-col2016/aca-col2016.component';
import { Pub2018Component } from './componentes/patrones/pub2018/pub2018.component';
import { Pub2017Component } from './componentes/patrones/pub2017/pub2017.component';
import { Pub2016Component } from './componentes/patrones/pub2016/pub2016.component';
import { Cit2018Component } from './componentes/patrones/cit2018/cit2018.component';
import { Cit2017Component } from './componentes/patrones/cit2017/cit2017.component';
import { Cit2016Component } from './componentes/patrones/cit2016/cit2016.component';
import { FwCitImp2018Component } from './componentes/patrones/fw-cit-imp2018/fw-cit-imp2018.component';
import { FwCitImp2017Component } from './componentes/patrones/fw-cit-imp2017/fw-cit-imp2017.component';
import { FwCitImp2016Component } from './componentes/patrones/fw-cit-imp2016/fw-cit-imp2016.component';
import { PubTCP2017Component } from './componentes/patrones/pub-tcp2017/pub-tcp2017.component';
import { PubTCP2018Component } from './componentes/patrones/pub-tcp2018/pub-tcp2018.component';
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
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProyectoComponent,
    PrincipalComponent,
    NosotrosComponent,
    H5IndexComponent,
    IntCol2018Component,
    IntCol2017Component,
    IntCol2016Component,
    AcaCol2018Component,
    AcaCol2017Component,
    AcaCol2016Component,
    Pub2018Component,
    Pub2017Component,
    Pub2016Component,
    Cit2018Component,
    Cit2017Component,
    Cit2016Component,
    FwCitImp2018Component,
    FwCitImp2017Component,
    FwCitImp2016Component,
    PubTCP2017Component,
    PubTCP2018Component,
    PubTCP2016Component,
    PubTJP2018Component,
    PubTJP2017Component,
    PubTJP2016Component,
    CitPP2018Component,
    CitPP2017Component,
    CitPP2016Component,
    Authors2018Component,
    Authors2017Component,
    Authors2016Component,
    CitPA2018Component,
    CitPA2017Component,
    CitPA2016Component,
    PubPA2018Component,
    PubPA2017Component,
    PubPA2016Component,
    ActualizarDatosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
