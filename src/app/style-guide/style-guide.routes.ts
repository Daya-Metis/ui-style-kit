import { Routes } from '@angular/router';
import { TypographySpacingComponent } from './pages/typography-spacing/typography-spacing.component';
import { IconsDemoComponent } from './pages/icons-demo/icons-demo.component';
import { UploadDemoComponent } from './pages/upload-demo/upload-demo.component';
import { AtomsComponent } from './pages/atoms/atoms/atoms.component';
import { StylingsComponent } from './pages/stylings/stylings.component';
import { MoleculesComponent } from './pages/molecules/molecules.component';
import { OrganismsComponent } from './pages/organisms/organisms.component';

export const STYLE_GUIDE_ROUTES: Routes = [
  { path: '', component: TypographySpacingComponent },
  { path: 'stylings', component: StylingsComponent },
  { path: 'icons', component: IconsDemoComponent },
  { path: 'upload', component: UploadDemoComponent },
  { path: 'atoms', component: AtomsComponent},
  { path: 'molecules', component: MoleculesComponent},
  { path: 'organisms', component: OrganismsComponent},
  { path: 'atoms', component: AtomsComponent},
];
