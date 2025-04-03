import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';
import { ActivatedRoute } from '@angular/router';

describe('ReportComponent', () => {
	let component: ReportComponent;
	let fixture: ComponentFixture<ReportComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ReportComponent],
			providers: [{ provide: ActivatedRoute, useValue: {} }],
		}).compileComponents();

		fixture = TestBed.createComponent(ReportComponent);
		component = fixture.componentInstance;
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
});
