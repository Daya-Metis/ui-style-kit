import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@atoms/icon/icon.component';
import { IconControlComponent } from '@atoms/icon-control/icon-control.component';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, NgClass, NgIf, IconComponent, IconControlComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @Input() title = 'Saved';
  @Input() message = 'Your changes are now available.';
  @Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() actionLabel = '';
  @Input() dismissible = true;
  @Output() dismissed = new EventEmitter<void>();
  @Output() action = new EventEmitter<void>();

  get stateIcon(): 'check' | 'info' | 'warning' | 'error' {
    switch (this.variant) {
      case 'success':
        return 'check';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'info';
    }
  }

  get stateTone(): 'primary' | 'success' | 'warning' | 'error' {
    switch (this.variant) {
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'primary';
    }
  }

  handleDismiss() {
    this.dismissed.emit();
  }

  handleAction() {
    this.action.emit();
  }
}
