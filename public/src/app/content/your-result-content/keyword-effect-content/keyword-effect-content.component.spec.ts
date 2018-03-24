import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordEffectContentComponent } from './keyword-effect-content.component';

describe('KeywordEffectContentComponent', () => {
  let component: KeywordEffectContentComponent;
  let fixture: ComponentFixture<KeywordEffectContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordEffectContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordEffectContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
