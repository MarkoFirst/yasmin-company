import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRowComponent } from './landing-row.component';

describe('LandingRowComponent', () => {
  let component: LandingRowComponent;
  let fixture: ComponentFixture<LandingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
