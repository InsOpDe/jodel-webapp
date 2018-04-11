import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedJodelComponent } from './related-jodel.component';

describe('RelatedJodelComponent', () => {
  let component: RelatedJodelComponent;
  let fixture: ComponentFixture<RelatedJodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedJodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedJodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
