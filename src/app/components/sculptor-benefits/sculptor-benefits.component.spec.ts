import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SculptorBenefitsComponent } from './sculptor-benefits.component';

describe('SculptorBenefitsComponent', () => {
  let component: SculptorBenefitsComponent;
  let fixture: ComponentFixture<SculptorBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SculptorBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SculptorBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
