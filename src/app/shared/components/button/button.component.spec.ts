import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
	let component: ButtonComponent;
	let fixture: ComponentFixture<ButtonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ButtonComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ButtonComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	describe('primary severity', () => {
		beforeEach(() => {
			fixture.componentRef.setInput('severity', 'primary');
			fixture.detectChanges();
		});

    it('should have primary class', () => expect(fixture.debugElement.nativeElement.classList).toContain('btn-primary'));
    it('should not have secondary class', () => expect(fixture.debugElement.nativeElement.classList).not.toContain('btn-secondary'));
    it('should not have text class', () => expect(fixture.debugElement.nativeElement.classList).not.toContain('btn-text'));
	});

	describe('secondary severity', () => {
		beforeEach(() => {
			fixture.componentRef.setInput('severity', 'secondary');
			fixture.detectChanges();
		});

    it('should have secondary class', () => expect(fixture.debugElement.nativeElement.classList).toContain('btn-secondary'));
    it('should not have primary class', () => expect(fixture.debugElement.nativeElement.classList).not.toContain('btn-primary'));
    it('should not have text class', () => expect(fixture.debugElement.nativeElement.classList).not.toContain('btn-text'));
	});

	describe('text severity', () => {
		beforeEach(() => {
			fixture.componentRef.setInput('severity', 'text');
			fixture.detectChanges();
		});

    it('should have text class', () => expect(fixture.debugElement.nativeElement.classList).toContain('btn-text'));
    it('should not have primary class', () => expect(fixture.debugElement.nativeElement.classList).not.toContain('btn-primary'));
    it('should not have secondary class', () => expect(fixture.debugElement.nativeElement.classList).not.toContain('btn-secondary'));
	});
});
