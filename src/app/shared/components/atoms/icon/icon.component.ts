import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() name: 'check' | 'close' | 'error' | 'info' | 'warning' = 'info';
  @Input() tone: 'neutral' | 'primary' | 'success' | 'warning' | 'error' = 'neutral';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get viewBox(): string {
    return this.name === 'warning' ? '0 0 20 18' : '0 0 20 20';
  }

  get path(): string {
    return {
      check: 'M4.5 10.5L8.3 14.3L15.5 6.7',
      close: 'M5 5L15 15M15 5L5 15',
      error: 'M5 5L15 15M15 5L5 15',
      info: 'M10 8V14M10 5.25H10.01',
      warning: 'M10 2L18 16H2L10 2Z'
    }[this.name];
  }
}
