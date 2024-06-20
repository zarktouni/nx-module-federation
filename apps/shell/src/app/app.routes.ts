import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: 'remote-app2',
    loadChildren: () =>
      import('remote-app2/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remote-app1',
    loadChildren: () =>
      import('remote-app1/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },
];
