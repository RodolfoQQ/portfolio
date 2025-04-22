import { Routes } from '@angular/router';
import { ContactoComponent } from './dashboard/contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { ServiciosComponent } from './dashboard/servicios/servicios.component';
import { TecnologiasComponent } from './dashboard/tecnologias/tecnologias.component';

export const routes: Routes = [
  {
    path:'dashboard',component :DashboardComponent,
    children :[
      {
        path: 'tecnologias',component: TecnologiasComponent
      },
      {
        path: 'home',component: HomeComponent
      },
      {
        path: 'servicios',component: ServiciosComponent
      },
      {
        path: 'contacto',component: ContactoComponent
      },
      {
        path: 'portfolio',component: PortfolioComponent
      },
    ]
  },{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },//impotante paraq inicie en esta pagina

];
