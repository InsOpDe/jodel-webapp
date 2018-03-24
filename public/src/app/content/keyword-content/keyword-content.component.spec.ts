import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordContentComponent } from './keyword-content.component';

describe('KeywordContentComponent', () => {
  let component: KeywordContentComponent;
  let fixture: ComponentFixture<KeywordContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
