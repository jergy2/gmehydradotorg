import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServerPopupComponent } from './add-server-popup.component';

describe('AddServerPopupComponent', () => {
  let component: AddServerPopupComponent;
  let fixture: ComponentFixture<AddServerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
