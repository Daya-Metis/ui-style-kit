import { Routes } from '@angular/router';
import { IconsDemoComponent } from './pages/icons-demo/icons-demo.component';
import { UploadDemoComponent } from './pages/upload-demo/upload-demo.component';
import { AtomsComponent } from './pages/atoms/atoms/atoms.component';
import { StylingsComponent } from './pages/stylings/stylings.component';
import { MoleculesComponent } from './pages/molecules/molecules.component';
import { OrganismsComponent } from './pages/organisms/organisms.component';
import { ThemeCustomizerComponent } from 'app/shared/utilities/theme-customizer/theme-customizer.component';
import { PagesComponent } from './pages/pages/pages.component';
import { TemplatesComponent } from './pages/templates/templates.component';

export const STYLE_GUIDE_ROUTES: Routes = [
  { path: '', component: ThemeCustomizerComponent },
  { path: 'stylings', component: StylingsComponent },
  { path: 'icons', component: IconsDemoComponent },
  { path: 'upload', component: UploadDemoComponent },
  { path: 'atoms', component: AtomsComponent},
  { path: 'molecules', component: MoleculesComponent},
  { path: 'organisms', component: OrganismsComponent},
  { path: 'templates', component: TemplatesComponent},
  { path: 'pages', component: PagesComponent},
];
