import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@atoms/button/button.component';
import { InputComponent } from '@atoms/input/input.component';
import { TypographySpacingComponent } from '../typography-spacing/typography-spacing.component';

@Component({
  selector: 'app-stylings',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    TypographySpacingComponent
  ],
  templateUrl: './stylings.component.html',
  styleUrls: ['./stylings.component.scss']
})
export class StylingsComponent {
  // optional: themeVars, customVars, etc.
}
