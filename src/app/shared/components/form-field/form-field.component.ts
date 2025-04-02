import { Component, ContentChild, inject } from '@angular/core';
import { ControlContainer, NgControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-form-field',
	imports: [],
	viewProviders: [{ provide: ControlContainer, useFactory: () => inject(ControlContainer, { skipSelf: true }) }],
	templateUrl: './form-field.component.html',
	styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
	@ContentChild(NgControl, { static: false }) ngControl!: NgControl;
	protected Validators = Validators;

	get control() {
		return this.ngControl?.control;
	}
}
