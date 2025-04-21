import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowsHoverFocusComponent } from './shadows-hover-focus.component';

describe('ShadowsHoverFocusComponent', () => {
  let component: ShadowsHoverFocusComponent;
  let fixture: ComponentFixture<ShadowsHoverFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowsHoverFocusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowsHoverFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
