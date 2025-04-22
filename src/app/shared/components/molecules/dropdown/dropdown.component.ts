import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
//TODO
  @Input() label = '';
  @Input() options: string[] = [];
}
