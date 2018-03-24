import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordBarchartContentComponent } from './keyword-barchart-content.component';

describe('KeywordBarchartContentComponent', () => {
  let component: KeywordBarchartContentComponent;
  let fixture: ComponentFixture<KeywordBarchartContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordBarchartContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordBarchartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
