import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'remote-app1',
    loadChildren: () =>
      import('remote-app1/Routes').then((m) => m.remoteRoutes),
  },
];
