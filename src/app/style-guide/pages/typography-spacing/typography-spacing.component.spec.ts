import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographySpacingComponent } from './typography-spacing.component';

describe('TypographySpacingComponent', () => {
  let component: TypographySpacingComponent;
  let fixture: ComponentFixture<TypographySpacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypographySpacingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographySpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
