import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SculptorComponent } from './sculptor.component';

describe('SculptorComponent', () => {
  let component: SculptorComponent;
  let fixture: ComponentFixture<SculptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SculptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SculptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
