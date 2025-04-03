import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../../../shared/components/form-field/form-field.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { PeopleService } from '@services/people.service';
import { PostPersonRequest } from '@models/post-person.request';
import { Router } from '@angular/router';
import { RegisterCreateForm, RegisterCreateFormModel } from './register-create.form';

@Component({
	selector: 'app-register-create',
	imports: [FormsModule, ReactiveFormsModule, CardComponent, FormFieldComponent, ButtonComponent],
	templateUrl: './register-create.component.html',
	styleUrl: './register-create.component.scss',
})
export class RegisterCreateComponent {
	private _peopleService = inject(PeopleService);
	private _router = inject(Router);

	private _form = new RegisterCreateForm();
	protected form: FormGroup<RegisterCreateFormModel> = this._form;

	protected async submit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
		await this.postPerson(this._form.getRequest());
	}

	private async postPerson(request: PostPersonRequest) {
		await this._peopleService.postPersonAsync(request).then(() => this._router.navigate(['/register']));
	}
}
