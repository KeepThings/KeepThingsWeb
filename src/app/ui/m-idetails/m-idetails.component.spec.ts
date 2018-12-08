import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MIDetailsComponent } from './m-idetails.component';

describe('MIDetailsComponent', () => {
  let component: MIDetailsComponent;
  let fixture: ComponentFixture<MIDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MIDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MIDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
