import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '@services/people.service';
import { providePeopleServiceForTesting } from '@services/people.service.spec';

describe('RegisterComponent', () => {
	let component: RegisterComponent;
	let fixture: ComponentFixture<RegisterComponent>;
	let peopleService: PeopleService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RegisterComponent],
			providers: [{ provide: ActivatedRoute, useValue: {} }, providePeopleServiceForTesting()],
		}).compileComponents();

		fixture = TestBed.createComponent(RegisterComponent);
		component = fixture.componentInstance;
		peopleService = TestBed.inject(PeopleService);
		(peopleService.getAllAsync as jasmine.Spy).and.resolveTo({ result: [], success: true, errors: [] });
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should contains main content', () => {
		const mainContent = fixture.debugElement.nativeElement.querySelector('[data-test="main-content"]');
		expect(mainContent).toBeTruthy();
	});

	it('should contains main table', () => {
		const mainTable = fixture.debugElement.nativeElement.querySelector('[data-test="main-table"]');
		expect(mainTable).toBeTruthy();
	});

	describe('on init', () => {
		it('should call getAllAsync', () => expect(peopleService.getAllAsync).toHaveBeenCalled());
	});
});
