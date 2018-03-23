import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultContentComponent } from './result-content.component';

describe('ResultContentComponent', () => {
  let component: ResultContentComponent;
  let fixture: ComponentFixture<ResultContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
