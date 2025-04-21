import { Component } from '@angular/core';
import { ButtonComponent } from '@atoms/button/button.component';
import { InputComponent } from '@atoms/input/input.component';
import { SwitchComponent } from '@atoms/switch/switch.component';
import { FormsModule } from '@angular/forms';
import { NgIf, TitleCasePipe } from '@angular/common';
import { PlaygroundComponent } from '@utilities/playground/playground.component';

@Component({
  selector: 'app-atoms',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    SwitchComponent,
    PlaygroundComponent,
    FormsModule, NgIf, TitleCasePipe
  ],
  templateUrl: './atoms.component.html',
  styleUrls: ['./atoms.component.scss']
})
export class AtomsComponent {
  variant: 'default' | 'icon' | 'icon-label' = 'default';
  type: 'primary' | 'secondary' = 'primary';
  isSecondary = false;

  updateTypeFromToggle(checked: boolean) {
    this.isSecondary = checked;
    this.type = checked ? 'secondary' : 'primary';
  }

  label = 'Click Me';
  icon = '👍';
  colors = {
    primary: '#007bff',
    secondary: '#6c757d'
  };
  
  updateColorFromInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.colors[this.type] = value;
    document.documentElement.style.setProperty(`--${this.type}`, value);
  }  

  get buttonMarkup(): string {
    const parts: string[] = [];
  
    parts.push(`<app-button`);
  
    if (this.label && this.variant !== 'icon') {
      parts.push(` label="${this.label}"`);
    }
  
    if (this.icon && this.variant !== 'default') {
      parts.push(` icon="${this.icon}"`);
    }
  
    if (this.variant !== 'default') {
      parts.push(` variant="${this.variant}"`);
    }
  
    if (this.type !== 'primary') {
      parts.push(` type="${this.type}"`);
    }
  
    parts.push(`></app-button>`);
  
    return parts.join('');
  }
  
  copyMarkup() {
    navigator.clipboard.writeText(this.buttonMarkup);
  }
  
}
