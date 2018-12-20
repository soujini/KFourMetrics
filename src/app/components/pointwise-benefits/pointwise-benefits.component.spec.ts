import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointwiseBenefitsComponent } from './pointwise-benefits.component';

describe('PointwiseBenefitsComponent', () => {
  let component: PointwiseBenefitsComponent;
  let fixture: ComponentFixture<PointwiseBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointwiseBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointwiseBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
