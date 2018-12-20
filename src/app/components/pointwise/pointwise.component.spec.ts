import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperEditionComponent } from './developer-edition.component';

describe('DeveloperEditionComponent', () => {
  let component: DeveloperEditionComponent;
  let fixture: ComponentFixture<DeveloperEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
