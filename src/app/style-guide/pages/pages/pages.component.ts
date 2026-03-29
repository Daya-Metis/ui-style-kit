import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@atoms/button/button.component';
import { CardComponent } from '@molecules/card/card.component';
import { TabsComponent } from '@organisms/tabs/tabs.component';
import { ContentTableComponent } from '@organisms/content-table/content-table.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent, TabsComponent, ContentTableComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  activeStayTab = 'cabins';

  sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'stays', label: 'Stay Types' },
    { id: 'rituals', label: 'Rituals' },
    { id: 'booking', label: 'Booking' }
  ];

  stayTabs = [
    { id: 'cabins', label: 'Cabins' },
    { id: 'suites', label: 'Suites' },
    { id: 'houses', label: 'Cliff Houses' }
  ];
}
