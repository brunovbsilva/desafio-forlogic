import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

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

  const mainContent = '[data-test="main-content"]';
  it('should contains main content', () => expect(fixture.debugElement.nativeElement.querySelector(mainContent)).toBeTruthy());
});
