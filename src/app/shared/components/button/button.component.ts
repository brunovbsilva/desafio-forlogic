import { Component, input } from '@angular/core';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'button[custom-button], a[custom-button]',
	imports: [],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
	host: {
		'[class.btn-primary]': "severity() === 'primary'",
		'[class.btn-secondary]': "severity() === 'secondary'",
		'[class.btn-success]': "severity() === 'success'",
		'[class.btn-text]': "severity() === 'text'",
	},
})
export class ButtonComponent {
	public severity = input('primary');
}
