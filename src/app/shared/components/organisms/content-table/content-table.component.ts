import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { ButtonComponent } from '@atoms/button/button.component';
import { CardComponent } from '@molecules/card/card.component';

@Component({
  selector: 'app-content-table',
  imports: [CommonModule, ButtonComponent, CardComponent],
  templateUrl: './content-table.component.html',
  styleUrl: './content-table.component.scss'
})
export class ContentTableComponent {
  @Input() sections: Array<{ id: string; label: string }> = [];
  @Input() title: string = 'Table of Contents';

  activeId: string = '';
  collapsed = false;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.removeEventListener('scroll', this.onScroll);
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }

  scrollTo(id: string, event: Event) {
    event.preventDefault();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const el = this.document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onScroll = () => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const scrollY = window.scrollY + 100;
    for (const section of this.sections) {
      const el = this.document.getElementById(section.id);
      if (el && el.offsetTop <= scrollY) {
        this.activeId = section.id;
      }
    }
  };
}
