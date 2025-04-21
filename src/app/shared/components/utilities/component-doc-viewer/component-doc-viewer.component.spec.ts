import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDocViewerComponent } from './component-doc-viewer.component';

describe('ComponentDocViewerComponent', () => {
  let component: ComponentDocViewerComponent;
  let fixture: ComponentFixture<ComponentDocViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDocViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDocViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
