import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPageSelectionComponent } from './content-page-selection.component';

describe('ContentPageSelectionComponent', () => {
  let component: ContentPageSelectionComponent;
  let fixture: ComponentFixture<ContentPageSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPageSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
