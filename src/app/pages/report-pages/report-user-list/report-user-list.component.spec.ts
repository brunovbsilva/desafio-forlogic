import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUserListComponent } from './report-user-list.component';
import { PeopleService, providePeopleServiceForTesting } from '@services/people.service';

describe('ReportUserListComponent', () => {
	let component: ReportUserListComponent;
	let fixture: ComponentFixture<ReportUserListComponent>;
	let peopleService: PeopleService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ReportUserListComponent],
			providers: [providePeopleServiceForTesting()],
		}).compileComponents();

		fixture = TestBed.createComponent(ReportUserListComponent);
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
