import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourResultContentComponent } from './your-result-content.component';

describe('YourResultContentComponent', () => {
  let component: YourResultContentComponent;
  let fixture: ComponentFixture<YourResultContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourResultContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourResultContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
