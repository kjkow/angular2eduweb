import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSelectorComponent } from './music-selector.component';

describe('MusicSelectorComponent', () => {
  let component: MusicSelectorComponent;
  let fixture: ComponentFixture<MusicSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
