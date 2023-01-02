import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemicProblemsComponent } from './systemic-problems.component';

describe('SystemicProblemsComponent', () => {
  let component: SystemicProblemsComponent;
  let fixture: ComponentFixture<SystemicProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemicProblemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemicProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
