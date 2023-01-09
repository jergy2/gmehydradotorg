import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastodonProvidersComponent } from './mastodon-providers.component';

describe('MastodonProvidersComponent', () => {
  let component: MastodonProvidersComponent;
  let fixture: ComponentFixture<MastodonProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastodonProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastodonProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
