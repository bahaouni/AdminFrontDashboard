import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ChartComponent } from './components/chart/chart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceFormComponent } from './components/service/service-form.component';
import {UsersComponent} from "./components/users/users.component";
import {HomeComponent} from "./components/Client-pages/home/home.component";
import {MyEventsComponent} from "./components/Client-pages/my-events/my-events.component";
import {ServiceSearchComponent} from "./components/Client-pages/service-search/service-search.component";
import {BusinessComponent} from "./components/Client-pages/business/business.component";
import { UserListComponent } from './components/user-list/user-list.component';
import { ServicesPageComponent } from './components/Client-pages/services-page/services-page.component';
import {RegisterComponent} from "./register/register.component";
import {EventDetailsComponent} from "./components/Client-pages/event-details/event-details.component";
import {AuthGuard} from "./auth.guard";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'historique', component: OrderHistoryComponent , canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'services', component: ServiceFormComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'my-events', component: MyEventsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'services-page', component: ServicesPageComponent },
  { path: 'project/:id', component: EventDetailsComponent },

  { path: '**', component: LoginComponent },


];
