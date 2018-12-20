import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecplotComponent } from './tecplot.component';

describe('TecplotComponent', () => {
  let component: TecplotComponent;
  let fixture: ComponentFixture<TecplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecplotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
