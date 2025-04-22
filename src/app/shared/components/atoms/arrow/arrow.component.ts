import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  standalone: true,
  template: `<span class="arrow" [ngClass]="[size, direction]"></span>`,
  styleUrls: ['./arrow.component.scss'],
  imports: [CommonModule, NgClass],
})
export class ArrowComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() direction: 'right' | 'left' | 'up' | 'down' = 'right';
}
