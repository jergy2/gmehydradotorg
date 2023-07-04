import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedProvidersComponent } from './dedicated-providers.component';

describe('DedicatedProvidersComponent', () => {
  let component: DedicatedProvidersComponent;
  let fixture: ComponentFixture<DedicatedProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DedicatedProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicatedProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
