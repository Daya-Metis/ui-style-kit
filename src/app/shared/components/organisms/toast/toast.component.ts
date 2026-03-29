import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '@atoms/button/button.component';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, NgClass, NgIf, ButtonComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @Input() title = 'Saved';
  @Input() message = 'Your changes are now available.';
  @Input() variant: 'info' | 'success' | 'warning' = 'info';
  @Input() actionLabel = '';
  @Input() dismissible = true;
  @Output() dismissed = new EventEmitter<void>();
  @Output() action = new EventEmitter<void>();

  handleDismiss() {
    this.dismissed.emit();
  }

  handleAction() {
    this.action.emit();
  }
}
