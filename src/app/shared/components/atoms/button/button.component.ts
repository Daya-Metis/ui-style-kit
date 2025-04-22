import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() icon: string = ''; // e.g. '🗑', '✅', or SVG name
  @Input() disabled = false;
  @Input() variant: 'default' | 'icon' | 'icon-label' | 'grow' = 'default';
  @Input() growDirection: 'left' | 'right' = 'right';

}
