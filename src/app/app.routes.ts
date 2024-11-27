import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ChartComponent } from './components/chart/chart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { ServiceAComponent } from './components/service-a/service-a.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent ,canActivate: [authGuard] },
    { path: 'chart', component: ChartComponent ,canActivate: [authGuard] },
    { path: 'historique', component: OrderHistoryComponent ,canActivate: [authGuard] },
    { path: 'login', component: LoginComponent  },
    { path: 'services', component: ServiceAComponent  },

    // Default route if none is specifiedng serv
    
  ];
