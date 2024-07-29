import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/layout/layout.component';
import { MapsComponent } from './domains/maps/maps.component';
import { SalesComponent } from './domains/sales/sales.component';
import { AtmComponent } from './domains/atm/atm.component';
import { StockComponent } from './domains/stock/stock.component';
import { ProductsComponent } from './domains/products/products.component';
import { ShiftsComponent } from './domains/shifts/shifts.component';
import { StatsComponent } from './domains/stats/stats.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MapsComponent,
      },
      {
        path: 'sales',
        component: SalesComponent,
      },
      {
        path: 'atm',
        component: AtmComponent,
      },
      {
        path: 'stock',
        component: StockComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'shitfs',
        component: ShiftsComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
    ],
  },
];
