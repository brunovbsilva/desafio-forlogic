import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { RegisterCreateComponent } from '@pages/register-pages/register-create/register-create.component';
import { RegisterComponent } from '@pages/register-pages/register/register.component';
import { ReportUserListComponent } from '@pages/report-pages/report-user-list/report-user-list.component';
import { ReportComponent } from '@pages/report-pages/report/report.component';

export const routes: Routes = [
	{ path: '', title: 'Home', component: HomeComponent },
	{ path: 'register', title: 'Cadastros', component: RegisterComponent },
	{ path: 'register/create', title: 'Novo cadastro', component: RegisterCreateComponent },
	{ path: 'report', title: 'Relatórios', component: ReportComponent },
	{ path: 'report/user-list', title: 'Lista de usuários', component: ReportUserListComponent },
	{ path: '**', redirectTo: '' },
];
