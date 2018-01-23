import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExComponent1Component } from './ex-component1.component';

describe('ExComponent1Component', () => {
  let component: ExComponent1Component;
  let fixture: ComponentFixture<ExComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
