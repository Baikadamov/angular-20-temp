import { Routes } from '@angular/router';

import { MainLayoutComponent }  from '@layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';
import { LoginComponent }       from '@features/auth/pages/login/login.component';
import { DashboardComponent }   from '@features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'manage',
    component: AdminLayoutComponent,
    children: [
      // Add admin child routes here
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      // Add feature routes here
    ],
  },
  { path: '**', redirectTo: '' },
];
