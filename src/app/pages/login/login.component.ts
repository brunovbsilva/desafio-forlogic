import { Component } from '@angular/core';
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
	protected form: FormGroup = new FormGroup({
		email: new FormControl(null, [Validators.required]),
		password: new FormControl(null, [Validators.required]),
	});

	constructor(
		private _authService: AuthService,
		private _router: Router
	) {}

	public async login() {
		await this._authService.login(this.form.get('email')?.value).then(() => this._router.navigate(['']));
	}
}
