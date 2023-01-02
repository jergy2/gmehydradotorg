import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrsLyricsComponent } from './drs-lyrics.component';

describe('DrsLyricsComponent', () => {
  let component: DrsLyricsComponent;
  let fixture: ComponentFixture<DrsLyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrsLyricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrsLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
