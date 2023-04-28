import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInitialComponent } from './section-initial.component';

describe('SectionInitialComponent', () => {
  let component: SectionInitialComponent;
  let fixture: ComponentFixture<SectionInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
