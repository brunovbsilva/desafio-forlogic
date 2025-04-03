import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { FormFieldComponent } from '../../shared/components/form-field/form-field.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@shared/components/button/button.component';
import { AuthService } from '@core/core-services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	imports: [FormsModule, ReactiveFormsModule, CardComponent, FormFieldComponent, ButtonComponent],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {
	private _authService = inject(AuthService);
	private _router = inject(Router);

	protected form: FormGroup = new FormGroup({
		email: new FormControl(null, [Validators.required]),
		password: new FormControl(null, [Validators.required]),
	});

	public async login() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
		await this._authService.login(this.form.get('email')?.value).then(() => this._router.navigate(['']));
	}
}
