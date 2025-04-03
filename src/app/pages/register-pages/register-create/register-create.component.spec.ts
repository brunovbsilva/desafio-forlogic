/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { RegisterCreateComponent } from './register-create.component';
import { providePeopleServiceForTesting } from '@services/people.service.spec';
import { PeopleService } from '@services/people.service';
import { Router } from '@angular/router';

describe('RegisterCreateComponent', () => {
	let component: RegisterCreateComponent;
	let fixture: ComponentFixture<RegisterCreateComponent>;
	let peopleService: PeopleService;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RegisterCreateComponent],
			providers: [providePeopleServiceForTesting()],
		}).compileComponents();

		fixture = TestBed.createComponent(RegisterCreateComponent);
		component = fixture.componentInstance;
		peopleService = TestBed.inject(PeopleService);
		router = TestBed.inject(Router);
		(peopleService.postPersonAsync as jasmine.Spy).and.resolveTo({ success: true, errors: [] });
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('on create person', () => {
		let submitButton: HTMLButtonElement;
		let activeInput: HTMLInputElement;
		let nameInput: HTMLInputElement;
		let emailInput: HTMLInputElement;
		let ageInput: HTMLInputElement;
		let addressInput: HTMLInputElement;
		let otherInput: HTMLInputElement;
		let interestInput: HTMLInputElement;
		let feelingsInput: HTMLInputElement;
		let valuesInput: HTMLInputElement;
		let routerSpy: jasmine.Spy;
		beforeEach(() => {
			submitButton = fixture.debugElement.nativeElement.querySelector('[data-test="submit-button"]');
			activeInput = fixture.debugElement.nativeElement.querySelector('[data-test="active-input"]');
			nameInput = fixture.debugElement.nativeElement.querySelector('[data-test="name-input"]');
			emailInput = fixture.debugElement.nativeElement.querySelector('[data-test="email-input"]');
			ageInput = fixture.debugElement.nativeElement.querySelector('[data-test="age-input"]');
			addressInput = fixture.debugElement.nativeElement.querySelector('[data-test="address-input"]');
			otherInput = fixture.debugElement.nativeElement.querySelector('[data-test="other-input"]');
			interestInput = fixture.debugElement.nativeElement.querySelector('[data-test="interest-input"]');
			feelingsInput = fixture.debugElement.nativeElement.querySelector('[data-test="feelings-input"]');
			valuesInput = fixture.debugElement.nativeElement.querySelector('[data-test="values-input"]');
			routerSpy = spyOn(router, 'navigate');
		});
		describe('with full form', () => {
			beforeEach(fakeAsync(() => {
				setInputValue(activeInput, true);
				setInputValue(nameInput, 'mock name');
				setInputValue(emailInput, 'mock email');
				setInputValue(ageInput, 25);
				setInputValue(addressInput, 'mock address');
				setInputValue(otherInput, 'mock other');
				setInputValue(interestInput, 'mock interest');
				setInputValue(feelingsInput, 'mock feelings');
				setInputValue(valuesInput, 'mock values');
				submitButton.click();
				fixture.detectChanges();
			}));

			it('should call postPerson', () => expect(peopleService.postPersonAsync).toHaveBeenCalled());
			it('should navigate to register', () => expect(routerSpy).toHaveBeenCalledWith(['/register']));
		});

		describe('with invalid form', () => {
			beforeEach(fakeAsync(() => {
				submitButton.click();
				fixture.detectChanges();
			}));

			it('should not call postPerson', () => expect(peopleService.postPersonAsync).not.toHaveBeenCalled());
			it('should not navigate to register', () => expect(routerSpy).not.toHaveBeenCalled());
		});

		describe('with only required parts', () => {
			beforeEach(fakeAsync(() => {
				setInputValue(activeInput, true);
				setInputValue(nameInput, 'mock name');
				setInputValue(emailInput, 'mock email');
				submitButton.click();
				fixture.detectChanges();
			}));

			it('should call postPerson', () => expect(peopleService.postPersonAsync).toHaveBeenCalled());
			it('should navigate to register', () => expect(routerSpy).toHaveBeenCalledWith(['/register']));
		});
	});
});

function setInputValue(input: HTMLInputElement, value: any) {
	input.value = value;
	input.dispatchEvent(new Event('input'));
}
