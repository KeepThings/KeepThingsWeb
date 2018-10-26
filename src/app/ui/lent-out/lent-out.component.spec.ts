import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LentOutComponent } from './lent-out.component';

describe('LentOutComponent', () => {
  let component: LentOutComponent;
  let fixture: ComponentFixture<LentOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LentOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LentOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
