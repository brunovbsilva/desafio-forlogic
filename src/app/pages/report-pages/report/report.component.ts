import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-report',
	imports: [CardComponent, RouterLink],
	templateUrl: './report.component.html',
	styleUrl: './report.component.scss',
})
export class ReportComponent {}
