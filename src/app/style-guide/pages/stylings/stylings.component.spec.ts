import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingsComponent } from './stylings.component';

describe('StylingsComponent', () => {
  let component: StylingsComponent;
  let fixture: ComponentFixture<StylingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
