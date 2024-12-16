import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ChartComponent } from './components/chart/chart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { ServiceAComponent } from './components/service-a/service-a.component';
import {UsersComponent} from "./components/users/users.component";
import {HomeComponent} from "./components/Client-pages/home/home.component";
import {MyEventsComponent} from "./components/Client-pages/my-events/my-events.component";
import {ServiceSearchComponent} from "./components/Client-pages/service-search/service-search.component";
import {BusinessComponent} from "./components/Client-pages/business/business.component";

export const routes: Routes = [
    { path: 'products', component: ProductsComponent  },
    { path: 'chart', component: ChartComponent  },
    { path: 'historique', component: OrderHistoryComponent  },
    { path: 'services', component: ServiceAComponent  },
    { path: 'Users', component: UsersComponent },
    { path: 'home', component: HomeComponent },
    { path: 'my-events', component: MyEventsComponent },
    { path: 'service-search', component: ServiceSearchComponent },
    { path: 'business', component: BusinessComponent },
    { path: '**', component: LoginComponent },



];
