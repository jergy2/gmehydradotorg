import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmApplicationComponent } from './confirm-application.component';

describe('ConfirmApplicationComponent', () => {
  let component: ConfirmApplicationComponent;
  let fixture: ComponentFixture<ConfirmApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
