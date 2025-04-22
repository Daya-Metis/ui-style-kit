import { Component } from '@angular/core';
import { ButtonComponent } from '@atoms/button/button.component';
import { InputComponent } from '@atoms/input/input.component';
import { SwitchComponent } from '@atoms/switch/switch.component';
import { FormsModule } from '@angular/forms';
import { NgIf, TitleCasePipe } from '@angular/common';
import { PlaygroundComponent } from 'app/shared/utilities/playground/playground.component';
import { SelectComponent } from '@molecules/select/select.component';
import { CheckboxComponent } from '@atoms/checkbox/checkbox.component';
import { RadioComponent } from '@atoms/radio/radio.component';
import { ArrowComponent } from '@atoms/arrow/arrow.component';
import { ContentTableComponent } from '@organisms/content-table/content-table.component';

@Component({
  selector: 'app-atoms',
  standalone: true,
  imports: [
    ArrowComponent,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    InputComponent,
    SelectComponent,
    SwitchComponent,
    PlaygroundComponent,
    ContentTableComponent,
    FormsModule, NgIf, TitleCasePipe
  ],
  templateUrl: './atoms.component.html',
  styleUrls: ['./atoms.component.scss']
})
export class AtomsComponent {
  variant: 'default' | 'icon' | 'icon-label' | 'grow' = 'default';
  type: 'primary' | 'secondary' = 'primary';
  isPrimary = false;
  checkboxState = false;
  radioSelection = 'primary';
  searchQuery = '';
  switchState = true;
  growDirection : 'left' | 'right' = 'right';
  toLeft = false;

  label = 'Click Me';
  icon = '👍';
  colors = {
    primary: '#007bff',
    secondary: '#6c757d'
  };

  updateTypeFromToggle(checked: boolean) {
    this.isPrimary = checked;
    this.type = checked ? 'primary' : 'secondary';
  }

  updateDirectionFromToggle(checked: boolean) {
    this.toLeft = checked;
    this.growDirection = checked ? 'left' : 'right';
  }
  
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
  
  confettiActive = false;

  triggerConfetti() {
    this.confettiActive = true;
    setTimeout(() => this.confettiActive = false, 1000); // 1 second
  }

}