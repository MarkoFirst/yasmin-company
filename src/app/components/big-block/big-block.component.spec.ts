import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBlockComponent } from './big-block.component';

describe('BigBlockComponent', () => {
  let component: BigBlockComponent;
  let fixture: ComponentFixture<BigBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
