import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@atoms/button/button.component';
import { CardComponent } from '@molecules/card/card.component';
import { ContentTableComponent } from '@organisms/content-table/content-table.component';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent, ContentTableComponent],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss'
})
export class TemplatesComponent {
  sections = [
    { id: 'hero', label: 'Overview' },
    { id: 'marketing', label: 'Marketing Shell' },
    { id: 'dashboard', label: 'Operations Shell' },
    { id: 'editorial', label: 'Editorial Shell' }
  ];

  marketingModules = [
    'Poster hero with one focal image and two actions',
    'Single proof band for stats, quotes, or launch details',
    'Atmospheric story block with split text and media',
    'Direct final CTA with no extra chrome'
  ];

  dashboardModules = [
    'Left rail for sections and filters',
    'Primary workspace for charts, tasks, or tables',
    'Secondary inspector for status and actions',
    'One accent color reserved for active state'
  ];

  editorialModules = [
    'Narrative cover section with strong title hierarchy',
    'Alternating media and copy slices',
    'Pull-quote or fact block for tempo changes',
    'Simple footer CTA or related reading trail'
  ];
}
