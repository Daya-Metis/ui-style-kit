import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TypographySpacingComponent } from '../typography-spacing/typography-spacing.component';
import { ContentTableComponent } from '@organisms/content-table/content-table.component';

@Component({
  selector: 'app-stylings',
  standalone: true,
  imports: [
    CommonModule,
    TypographySpacingComponent,
    ContentTableComponent
  ],
  templateUrl: './stylings.component.html',
  styleUrls: ['./stylings.component.scss']
})
export class StylingsComponent {
  floatCode = `.float-demo {
    position: fixed;
    top: var(--spacing-md);
    right: var(--spacing-md);
    box-shadow: var(--shadow-md);
  }`;
  
  focusCode = `&:focus, &:focus-visible {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px var(--accent);
  }`;

  hoverCode = `
    &:hover {
      opacity: 0.9;
    }
  `; 
  
  disabledCode = `
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  spacings = [
    { token: '--spacing-xs', value: 4 },
    { token: '--spacing-sm', value: 8 },
    { token: '--spacing-md', value: 16 },
    { token: '--spacing-lg', value: 24 },
    { token: '--spacing-xl', value: 32 },
    { token: '--spacing-xxl', value: 48 }
  ];
  
}
