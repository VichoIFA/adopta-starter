import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./pages/registro/registro.page').then((m) => m.RegistroPage),
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./pages/galeria/galeria.page').then((m) => m.GaleriaPage),
  },
  {
    path: 'detalle/:id',
    loadComponent: () =>
      import('./pages/detalle/detalle.page').then((m) => m.DetallePage),
  },
  {
    path: 'nuevo',
    loadComponent: () =>
      import('./pages/nuevo/nuevo.page').then((m) => m.NuevoPage),
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./pages/editar/editar.page').then( m => m.EditarPage)
  },
];
