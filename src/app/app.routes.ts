import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ChartComponent } from './components/chart/chart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { ServiceAComponent } from './components/service-a/service-a.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent  },
    { path: 'chart', component: ChartComponent  },
    { path: 'historique', component: OrderHistoryComponent  },
    { path: 'services', component: ServiceAComponent  },
    { path: '**', component: LoginComponent  },



];
