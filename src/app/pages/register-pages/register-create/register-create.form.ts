import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostPersonRequest } from '@models/post-person.request';

export interface RegisterCreateFormModel {
	active: FormControl<boolean>;
	name: FormControl<string>;
	age: FormControl<number | null>;
	email: FormControl<string>;
	address: FormControl<string | null>;
	other: FormControl<string | null>;
	interest: FormControl<string | null>;
	feelings: FormControl<string | null>;
	values: FormControl<string | null>;
}

export class RegisterCreateForm extends FormGroup<RegisterCreateFormModel> {
	get active() {
		return this.controls.active;
	}
	get name() {
		return this.controls.name;
	}
	get age() {
		return this.controls.age;
	}
	get email() {
		return this.controls.email;
	}
	get address() {
		return this.controls.address;
	}
	get other() {
		return this.controls.other;
	}
	get interest() {
		return this.controls.interest;
	}
	get feelings() {
		return this.controls.feelings;
	}
	get values() {
		return this.controls.values;
	}

	constructor() {
		super({
			active: new FormControl<boolean>(false, { nonNullable: true }),
			name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
			age: new FormControl<number | null>(null),
			email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
			address: new FormControl<string | null>(null),
			other: new FormControl<string | null>(null),
			interest: new FormControl<string | null>(null),
			feelings: new FormControl<string | null>(null),
			values: new FormControl<string | null>(null),
		});
	}

	public getRequest(): PostPersonRequest {
		return {
			name: this.name.value,
			email: this.email.value,
			active: this.active.value,
			age: this.age.value ?? undefined,
			address: this.address.value ?? undefined,
			otherInformation: this.other.value ?? undefined,
			interests: this.interest.value ?? undefined,
			feelings: this.feelings.value ?? undefined,
			values: this.values.value ?? undefined,
		};
	}
}
