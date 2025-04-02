import { Component, ContentChild } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-form-field',
	imports: [],
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
