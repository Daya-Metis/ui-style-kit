import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() value: string = '';
  @Input() model: string[] | string = '';
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() modelChange = new EventEmitter<string | string[]>();

  toggle() {
    if (Array.isArray(this.model)) {
      const exists = this.model.includes(this.value);
      const updated = exists
        ? this.model.filter(v => v !== this.value)
        : [...this.model, this.value];
      this.modelChange.emit(updated);
    } else if (this.value) {
      const newValue = this.model === this.value ? '' : this.value;
      this.modelChange.emit(newValue);
    } else {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }

  get isChecked(): boolean {
    if (!this.value && typeof this.model === 'string' && this.model === '') {
      return this.checked;
    }

    return Array.isArray(this.model)
      ? this.model.includes(this.value)
      : this.model === this.value;
  }
  
}
