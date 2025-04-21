import { Routes } from '@angular/router';
import { TypographySpacingComponent } from './pages/typography-spacing/typography-spacing.component';
import { ShadowsHoverFocusComponent } from './pages/shadows-hover-focus/shadows-hover-focus.component';
import { IconsDemoComponent } from './pages/icons-demo/icons-demo.component';
import { UploadDemoComponent } from './pages/upload-demo/upload-demo.component';
import { AtomsComponent } from './pages/atoms/atoms/atoms.component';

export const STYLE_GUIDE_ROUTES: Routes = [
  { path: '', component: TypographySpacingComponent },
  { path: 'shadows', component: ShadowsHoverFocusComponent },
  { path: 'icons', component: IconsDemoComponent },
  { path: 'upload', component: UploadDemoComponent },
  { path: 'atoms', component: AtomsComponent}
  
];
