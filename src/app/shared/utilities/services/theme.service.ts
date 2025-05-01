import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private colors: { [key: string]: string } = {};

  private colorSubject = new BehaviorSubject<{ [key: string]: string }>({});
  colorChanges$ = this.colorSubject.asObservable();

  constructor() {
    this.syncWithComputedTheme();
  }

  syncWithComputedTheme() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
    const root = getComputedStyle(document.documentElement);
    const tokens = ['primary', 'secondary', 'bg-color', 'text-color', 'accent', 'bg-container'];
    tokens.forEach(token => {
      const value = root.getPropertyValue(`--${token}`).trim();
      this.colors[token] = value;
    });
  
    this.colorSubject.next({ ...this.colors });
  }

  getColor(token: string): string {
    return this.colors[token];
  }

  setColor(token: string, value: string) {
    this.colors[token] = value;
    document.documentElement.style.setProperty(`--${token}`, value);
    localStorage.setItem(`--${token}`, value);
    this.colorSubject.next({ ...this.colors });
  }

  getAllColors(): { [key: string]: string } {
    return { ...this.colors };
  }
}