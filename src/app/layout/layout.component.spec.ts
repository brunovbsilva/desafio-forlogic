import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
	let component: LayoutComponent;
	let fixture: ComponentFixture<LayoutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LayoutComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
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
		const header = 'header[data-test="header"]';
		const headerInput = 'input[data-test="header-input"]';
		const headerUser = '[data-test="header-user"]';
		const headerLogout = '[data-test="header-logout"]';
		it('should exists', () => expect(fixture.debugElement.nativeElement.querySelector(header)).toBeTruthy());
		it('should contains a search input', () =>
			expect(fixture.debugElement.nativeElement.querySelector(headerInput)).toBeTruthy());
		it('should contains an user info', () =>
			expect(fixture.debugElement.nativeElement.querySelector(headerUser)).toBeTruthy());
		it('should contains a logout button', () =>
			expect(fixture.debugElement.nativeElement.querySelector(headerLogout)).toBeTruthy());
	});
});
