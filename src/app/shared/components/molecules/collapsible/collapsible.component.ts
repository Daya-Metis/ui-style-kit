import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArrowComponent } from '@atoms/arrow/arrow.component';

@Component({
  selector: 'app-collapsible',
  standalone: true,
  imports: [CommonModule, ArrowComponent],
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent {
  @Input() title = '';
  @Input() preview = '';
  @Input() expanded = false;

  toggle() {
    this.expanded = !this.expanded;
  }
}

