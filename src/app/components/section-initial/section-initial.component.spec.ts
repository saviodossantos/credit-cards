import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionInitialComponent } from './section-initial.component';

describe('SectionInitialComponent', () => {
  let component: SectionInitialComponent;
  let fixture: ComponentFixture<SectionInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
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
