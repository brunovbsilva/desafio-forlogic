import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from '../../../shared/components/form-field/form-field.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
	selector: 'app-register-create',
	imports: [FormsModule, ReactiveFormsModule, CardComponent, FormFieldComponent, ButtonComponent],
	templateUrl: './register-create.component.html',
	styleUrl: './register-create.component.scss',
})
export class RegisterCreateComponent {
	form = new FormGroup({
		active: new FormControl(false),
		name: new FormControl(null, [Validators.required]),
		age: new FormControl(null),
		email: new FormControl(null, [Validators.required]),
		address: new FormControl(null),
		other: new FormControl(null),
		interest: new FormControl(null),
		feelings: new FormControl(null),
		values: new FormControl(null),
	});
}
