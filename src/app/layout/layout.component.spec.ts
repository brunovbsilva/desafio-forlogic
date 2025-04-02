/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/core-services/auth.service';

describe('LayoutComponent', () => {
	let component: LayoutComponent;
	let fixture: ComponentFixture<LayoutComponent>;
	let authService: AuthService;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LayoutComponent],
			providers: [{ provide: ActivatedRoute, useValue: {} }],
		}).compileComponents();

		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
		authService = TestBed.inject(AuthService);
		router = TestBed.inject(Router);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('Sidebar', () => {
		const sidebar = 'aside[data-test="sidebar"]';
		const sidebarHeader = '[data-test="sidebar-header"]';
		const sidebarNav = 'nav[data-test="sidebar-nav"]';
		it('should exists', () => expect(fixture.debugElement.nativeElement.querySelector(sidebar)).toBeTruthy());
		it('should contains a header', () =>
			expect(fixture.debugElement.nativeElement.querySelector(sidebarHeader)).toBeTruthy());
		it('should contains a navigation', () =>
			expect(fixture.debugElement.nativeElement.querySelector(sidebarNav)).toBeTruthy());
	});

	describe('Header', () => {
		let header: any;
		let headerInput: any;
		let headerUser: any;
		let headerLogout: any;
		beforeEach(() => {
			header = fixture.debugElement.nativeElement.querySelector('header[data-test="header"]');
			headerInput = fixture.debugElement.nativeElement.querySelector('input[data-test="header-input"]');
			headerUser = fixture.debugElement.nativeElement.querySelector('[data-test="header-user"]');
			headerLogout = fixture.debugElement.nativeElement.querySelector('[data-test="header-logout"]');
		});
		it('should exists', () => expect(header).toBeTruthy());
		it('should contains a search input', () => expect(headerInput).toBeTruthy());
		it('should contains an user info', () => expect(headerUser).toBeTruthy());
		it('should contains a logout button', () => expect(headerLogout).toBeTruthy());
		it('should logout', fakeAsync(() => {
			const logoutSpy = spyOn(authService, 'logout').and.callThrough();
			const navigateSpy = spyOn(router, 'navigate');
			headerLogout.click();
			tick(100);
			fixture.detectChanges();
			expect(logoutSpy).toHaveBeenCalled();
			expect(navigateSpy).toHaveBeenCalled();
		}));
	});
});
