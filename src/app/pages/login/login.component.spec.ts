/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '@core/core-services/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let authService: AuthService;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		authService = TestBed.inject(AuthService);
		router = TestBed.inject(Router);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('on init', () => {
		let card: any;
		let logo: any;
		let emailInput: any;
		let passwordInput: any;
		let submitButton: any;

		let loginSpy: jasmine.Spy;
		let navigateSpy: jasmine.Spy;

		beforeEach(() => {
			card = fixture.debugElement.nativeElement.querySelector('[data-test="card"]');
			logo = fixture.debugElement.nativeElement.querySelector('[data-test="logo"]');
			emailInput = fixture.debugElement.nativeElement.querySelector('[data-test="email"]');
			passwordInput = fixture.debugElement.nativeElement.querySelector('[data-test="password"]');
			submitButton = fixture.debugElement.nativeElement.querySelector('[data-test="submit"]');
			loginSpy = spyOn(authService, 'login').and.callThrough();
			navigateSpy = spyOn(router, 'navigate');
		});

		it('should have a card', () => expect(card).toBeTruthy());
		it('should have a logo', () => expect(logo).toBeTruthy());
		it('should have a email input', () => expect(emailInput).toBeTruthy());
		it('should have a password input', () => expect(passwordInput).toBeTruthy());
		it('should have a submit button', () => expect(submitButton).toBeTruthy());
		it('should login', fakeAsync(() => {
			emailInput.value = 'test';
			emailInput.dispatchEvent(new Event('input'));
			passwordInput.value = 'test';
			passwordInput.dispatchEvent(new Event('input'));
			fixture.detectChanges();
			submitButton.click();
      tick(100);
			fixture.detectChanges();
			expect(loginSpy).toHaveBeenCalled();
			expect(loginSpy).toHaveBeenCalled();
		}));
	});
});
