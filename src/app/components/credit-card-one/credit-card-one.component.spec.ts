import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardOneComponent } from './credit-card-one.component';

describe('CreditCardOneComponent', () => {
  let component: CreditCardOneComponent;
  let fixture: ComponentFixture<CreditCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
