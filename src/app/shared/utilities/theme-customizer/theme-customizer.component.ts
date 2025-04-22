import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@atoms/button/button.component';
import { InputComponent } from '@atoms/input/input.component';

@Component({
  selector: 'app-theme-customizer',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, InputComponent],
  templateUrl: './theme-customizer.component.html',
  styleUrls: ['./theme-customizer.component.scss']
})
export class ThemeCustomizerComponent {
  customVars: { [key: string]: string } = {
    '--primary': '#007bff',
    '--secondary': '#6c757d',
    '--bg-color': '#ffffff',
    '--text-color': '#1e1e1e',
    '--bg-container': '#f5f5f5',
    '--accent': '#ffc107'
  };  
  baseColor: string = '#007bff';

  ngOnInit() {
    Object.entries(this.customVars).forEach(([key, _]) => {
      const saved = localStorage.getItem(key);
      if (saved) {
        document.documentElement.style.setProperty(key, saved);
        this.customVars[key] = saved;
      }
    });
  }

  resetTheme() {
    for (const key in this.customVars) {
      const value = this.customVars[key as keyof typeof this.customVars];
      document.documentElement.style.setProperty(key, value);
      localStorage.removeItem(key);
    }
    this.customVars = { ...this.customVars };

    location.reload();
  }
  
  updateVar(key: string, event: Event | string) {
    const value = typeof event === 'string'
      ? event
      : (event.target as HTMLInputElement).value;
  
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

  generateTheme() {
    const primary = this.baseColor;
    const secondary = this.adjustColor(primary, 30);
    const accent = this.adjustColor(primary, -30);
    const textColor = this.isDark(primary) ? '#ffffff' : '#1e1e1e';
    const bgColor = this.isDark(primary) ? '#1e1e1e' : '#ffffff';
    const bgContainer = this.isDark(primary) ? '#2c2c2c' : '#f5f5f5';
  
    const themeVars = {
      '--primary': primary,
      '--secondary': secondary,
      '--accent': accent,
      '--text-color': textColor,
      '--bg-color': bgColor,
      '--bg-container': bgContainer
    };
    
    Object.entries(themeVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
      localStorage.setItem(key, value);
    });
    this.customVars = { ...themeVars };
  }

  isDark(color: string): boolean {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }
  
  adjustColor(hex: string, amount: number): string {
    return (
      '#' +
      hex
        .replace(/^#/, '')
        .match(/.{2}/g)!
        .map((c) =>
          Math.min(255, Math.max(0, parseInt(c, 16) + amount))
            .toString(16)
            .padStart(2, '0')
        )
        .join('')
    );
  }
  

}

