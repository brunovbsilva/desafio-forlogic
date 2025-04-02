import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
	selector: 'app-report-user-list',
	imports: [CardComponent, ButtonComponent],
	templateUrl: './report-user-list.component.html',
	styleUrl: './report-user-list.component.scss',
})
export class ReportUserListComponent {}
