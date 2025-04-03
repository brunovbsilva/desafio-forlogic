import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PeopleService } from '@services/people.service';
import { providePeopleServiceForTesting } from '@services/people.service.spec';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let peopleService: PeopleService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeComponent],
			providers: [providePeopleServiceForTesting()],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		peopleService = TestBed.inject(PeopleService);
		(peopleService.getAllAsync as jasmine.Spy).and.resolveTo({ result: [], success: true, errors: [] });
		(peopleService.getHomeScoreAsync as jasmine.Spy).and.resolveTo({
			result: {
				totalScore: 0,
				pendingScore: 0,
				lastMonthScore: 0,
			},
			success: true,
			errors: [],
		});
	});

	beforeEach(fakeAsync(() => {
		fixture.detectChanges();
		tick(100);
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('should contains card-rows', () => {
		const cardRow = '[data-test="card-row"]';
		const totalCard = '[data-test="total-card"]';
		const lastMonthCard = '[data-test="last-month-card"]';
		const pendingCard = '[data-test="pending-card"]';
		it('card row exists', () => expect(fixture.debugElement.nativeElement.querySelector(cardRow)).toBeTruthy());
		it('total card', () => expect(fixture.debugElement.nativeElement.querySelector(totalCard)).toBeTruthy());
		it('last month card', () => expect(fixture.debugElement.nativeElement.querySelector(lastMonthCard)).toBeTruthy());
		it('pending card', () => expect(fixture.debugElement.nativeElement.querySelector(pendingCard)).toBeTruthy());
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
		it('should call getHomeScoreAsync', () => expect(peopleService.getHomeScoreAsync).toHaveBeenCalled());
	});
});
