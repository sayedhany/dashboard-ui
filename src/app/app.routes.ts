import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./features/orders/orders.module').then(
            (m) => m.OrdersModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./features/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'items',
        loadChildren: () =>
          import('./features/items/items.module').then(
            (m) => m.ItemsModule
          ),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./features/transactions/transactions.module').then(
            (m) => m.TransactionsModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./features/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('./features/messages/messages.module').then(
            (m) => m.MessagesModule
          ),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./features/support/support.module').then(
            (m) => m.SupportModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];
