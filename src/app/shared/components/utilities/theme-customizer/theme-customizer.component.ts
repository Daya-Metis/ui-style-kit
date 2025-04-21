import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-customizer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './theme-customizer.component.html',
  styleUrls: ['./theme-customizer.component.scss']
})
export class ThemeCustomizerComponent {
  customVars: { [key: string]: string } = {
    '--primary': '#007bff',
    '--bg-color': '#ffffff',
    '--text-color': '#1e1e1e',
  };  

  updateVar(key: string, value: string) {
    this.customVars[key] = value;
    document.documentElement.style.setProperty(key, value);
    localStorage.setItem(key, value);
  }
  
  getValue(key: string): string {
    return this.customVars[key] || '#000000';
  }  
  getInputValue(event: Event): string {
    return (event.target as HTMLInputElement)?.value || '';
  }  

  ngOnInit() {
    Object.entries(this.customVars).forEach(([key, _]) => {
      const saved = localStorage.getItem(key);
      if (saved) {
        document.documentElement.style.setProperty(key, saved);
        this.customVars[key] = saved;
      }
    });
  }
}

