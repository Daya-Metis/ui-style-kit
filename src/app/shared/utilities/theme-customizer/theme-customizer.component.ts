import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@atoms/button/button.component';
import { InputComponent } from '@atoms/input/input.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-customizer',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, InputComponent],
  templateUrl: './theme-customizer.component.html',
  styleUrls: ['./theme-customizer.component.scss']
})
export class ThemeCustomizerComponent {

  customVars: { [key: string]: string } = {};  
  baseColor: string = '#007bff';

  constructor(public themeService: ThemeService) {}
  
  ngOnInit() {
    this.themeService.syncWithComputedTheme();
    this.customVars = this.themeService.getAllColors();
  
    this.baseColor = this.themeService.getColor('primary');

    this.themeService.colorChanges$.subscribe(updated => {
      this.customVars = updated;
    });
  }

  resetTheme() {
    this.themeService.syncWithComputedTheme();
    location.reload();
  }

  generateTheme() {
    const primary = this.baseColor;
    const secondary = this.adjustColor(primary, 30);
    const accent = this.adjustColor(primary, -30);
    const success = this.adjustColor(primary, -10);
    const error = this.isDark(primary) ? '#ff7878' : '#d64545';
    const textColor = this.isDark(primary) ? '#ffffff' : '#1e1e1e';
    const bgColor = this.isDark(primary) ? '#1e1e1e' : '#ffffff';
    const bgContainer = this.isDark(primary) ? '#2c2c2c' : '#f5f5f5';
    const bgElevated = this.isDark(primary) ? '#232323' : '#fcfcfb';
    const textMuted = this.isDark(primary) ? '#b7bfca' : '#5d6773';
    const borderColor = this.isDark(primary) ? '#343b44' : '#cfd5dc';
    const borderStrong = this.isDark(primary) ? '#48515d' : '#b9c2cc';
    const onPrimary = this.isDark(primary) ? '#08111c' : '#ffffff';
    const onSecondary = '#ffffff';
  
    const themeVars = {
      'primary': primary,
      'secondary': secondary,
      'accent': accent,
      'success': success,
      'error': error,
      'text-color': textColor,
      'bg-color': bgColor,
      'bg-container': bgContainer,
      'bg-elevated': bgElevated,
      'text-muted': textMuted,
      'border-color': borderColor,
      'border-strong': borderStrong,
      'on-primary': onPrimary,
      'on-secondary': onSecondary
    };
    
    Object.entries(themeVars).forEach(([key, value]) => {
      this.themeService.setColor(key, value)
    });
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
