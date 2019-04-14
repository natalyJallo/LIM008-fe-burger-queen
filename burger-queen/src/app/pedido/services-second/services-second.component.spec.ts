import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSecondComponent } from './services-second.component';

describe('ServicesSecondComponent', () => {
  let component: ServicesSecondComponent;
  let fixture: ComponentFixture<ServicesSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
