import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeContentComponent } from './time-content.component';

describe('TimeContentComponent', () => {
  let component: TimeContentComponent;
  let fixture: ComponentFixture<TimeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
