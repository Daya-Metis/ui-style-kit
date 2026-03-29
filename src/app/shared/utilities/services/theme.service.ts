import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private colors: { [key: string]: string } = {};

  private colorSubject = new BehaviorSubject<{ [key: string]: string }>({});
  colorChanges$ = this.colorSubject.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.syncWithComputedTheme();
  }

  syncWithComputedTheme() {
    if (!isPlatformBrowser(this.platformId)) return;

    const root = getComputedStyle(this.document.documentElement);
    const tokens = [
      'primary',
      'secondary',
      'bg-color',
      'text-color',
      'accent',
      'bg-container',
      'bg-elevated',
      'text-muted',
      'border-color',
      'border-strong',
      'on-primary',
      'on-secondary'
    ];

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

    if (isPlatformBrowser(this.platformId)) {
      this.document.documentElement.style.setProperty(`--${token}`, value);
      localStorage.setItem(`--${token}`, value);
    }

    this.colorSubject.next({ ...this.colors });
  }

  getAllColors(): { [key: string]: string } {
    return { ...this.colors };
  }
}
