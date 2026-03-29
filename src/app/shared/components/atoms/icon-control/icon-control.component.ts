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
  @Input() icon: 'close' | 'info' | 'warning' | 'check' | 'error' = 'close';
  @Input() tone: 'neutral' | 'primary' | 'success' | 'warning' | 'error' = 'neutral';
  @Input() label = 'Action';
  @Input() shape: 'circle' | 'rounded' | 'plain' = 'circle';
  @Output() pressed = new EventEmitter<void>();

  handlePress() {
    this.pressed.emit();
  }
}
