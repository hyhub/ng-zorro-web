import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPassedComponent } from './credit-passed.component';

describe('CreditPassedComponent', () => {
  let component: CreditPassedComponent;
  let fixture: ComponentFixture<CreditPassedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditPassedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
