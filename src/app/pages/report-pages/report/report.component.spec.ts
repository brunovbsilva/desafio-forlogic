import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
	let component: ReportComponent;
	let fixture: ComponentFixture<ReportComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ReportComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ReportComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	const mainContent = '[data-test="main-content"]';
	const mainTable = '[data-test="main-table"]';
	it('should contains main content', () =>
		expect(fixture.debugElement.nativeElement.querySelector(mainContent)).toBeTruthy());
	it('should contains main table', () =>
		expect(fixture.debugElement.nativeElement.querySelector(mainTable)).toBeTruthy());
});
