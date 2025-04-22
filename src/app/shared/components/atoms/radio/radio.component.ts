import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {
  @Input() label = '';
  @Input() value: string = '';
  @Input() model: string = '';
  @Output() modelChange = new EventEmitter<string>();

  select() {
    if (this.model !== this.value) {
      this.modelChange.emit(this.value);
    }
  }
}
