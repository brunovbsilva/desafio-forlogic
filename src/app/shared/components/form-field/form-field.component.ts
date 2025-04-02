import { Component, contentChild } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-form-field',
	imports: [],
	templateUrl: './form-field.component.html',
	styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
	protected label = contentChild('label');
	protected ngControl = contentChild(NgControl);
	protected Validators = Validators;

	get control() {
		return this.ngControl()?.control;
	}
}
