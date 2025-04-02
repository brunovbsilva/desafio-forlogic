import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ActivatedRoute } from '@angular/router';

describe('RegisterComponent', () => {
	let component: RegisterComponent;
	let fixture: ComponentFixture<RegisterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RegisterComponent],
			providers: [{ provide: ActivatedRoute, useValue: {} }],
		}).compileComponents();

		fixture = TestBed.createComponent(RegisterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	const mainContent = '[data-test="main-content"]';
	it('should contains main content', () =>
		expect(fixture.debugElement.nativeElement.querySelector(mainContent)).toBeTruthy());
});
