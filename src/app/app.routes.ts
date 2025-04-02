import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from '@pages/login/login.component';
import { inject } from '@angular/core';
import { AuthService } from '@core/core-services/auth.service';

export const routes: Routes = [
	{
		path: '',
		canMatch: [() => inject(AuthService).isAuthenticated()],
		component: LayoutComponent,
		loadChildren: () => import('@routes/logged.routes').then(m => m.routes),
	},
	{ path: 'login', title: 'login', component: LoginComponent },
	{ path: '**', redirectTo: 'login' },
];
