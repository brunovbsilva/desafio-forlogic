import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUserListComponent } from './report-user-list.component';

describe('ReportUserListComponent', () => {
  let component: ReportUserListComponent;
  let fixture: ComponentFixture<ReportUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportUserListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
