import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIDetailsComponent } from './u-idetails.component';

describe('UIDetailsComponent', () => {
  let component: UIDetailsComponent;
  let fixture: ComponentFixture<UIDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
