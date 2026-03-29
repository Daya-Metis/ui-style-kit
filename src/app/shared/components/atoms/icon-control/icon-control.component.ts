import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@atoms/icon/icon.component';

@Component({
  selector: 'app-icon-control',
  standalone: true,
  imports: [CommonModule, NgClass, IconComponent],
  templateUrl: './icon-control.component.html',
  styleUrl: './icon-control.component.scss'
})
export class IconControlComponent {
  @Input() variant: 'close' | 'info' | 'warning' | 'success' | 'error' = 'close';
  @Input() label = 'Action';
  @Input() shape: 'circle' | 'rounded' | 'plain' = 'circle';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Output() pressed = new EventEmitter<void>();

  get icon(): 'close' | 'info' | 'warning' | 'check' | 'error' {
    switch (this.variant) {
      case 'success':
        return 'check';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      default:
        return 'close';
    }
  }

  get tone(): 'neutral' | 'primary' | 'success' | 'warning' | 'error' {
    switch (this.variant) {
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      case 'info':
        return 'primary';
      default:
        return 'neutral';
    }
  }

  handlePress() {
    this.pressed.emit();
  }
}
