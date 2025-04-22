import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  standalone: true,
  template: `<span class="arrow" [ngClass]="[direction]"></span>`,
  styleUrls: ['./arrow.component.scss'],
  imports: [CommonModule, NgClass],
})
export class ArrowComponent {
  @Input() direction: 'right' | 'left' | 'up' | 'down' = 'right';
  @Input() scale: number = 1; //TODO

  getTransform(): string {
    const baseRotation = {
      right: '-45deg',
      down: '45deg',
      left: '135deg',
      up: '225deg'
    }[this.direction];
  
    return `rotate(${baseRotation}) scale(${this.scale})`;
  }
  
}
