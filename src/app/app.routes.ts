import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from '@pages/login/login.component';

export const routes: Routes = [
	{ path: '', component: LayoutComponent, loadChildren: () => import('@routes/logged.routes').then(m => m.routes) },
	{ path: '', title: 'login', component: LoginComponent },
];
