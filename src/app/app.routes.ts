import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'style-guide', pathMatch: 'full' },
  {
    path: 'style-guide',
    loadChildren: () =>
      import('./style-guide/style-guide.routes').then(m => m.STYLE_GUIDE_ROUTES)
  }
];
