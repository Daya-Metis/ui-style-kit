import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@atoms/button/button.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  @Input() title = '';
  @Input() code: string = '';

  copyCode() {
    navigator.clipboard.writeText(this.code);
  }
}
