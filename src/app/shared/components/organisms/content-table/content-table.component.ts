import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() title : string = "Table of Contents";

activeId: string = '';
collapsed = false;

ngOnInit() {
  window.addEventListener('scroll', this.onScroll);
}

ngOnDestroy() {
  window.removeEventListener('scroll', this.onScroll);
}

toggle() {
  this.collapsed = !this.collapsed;
}

scrollTo(id: string, event: Event) {
  event.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

onScroll = () => {
  const scrollY = window.scrollY + 100;
  for (const section of this.sections) {
    const el = document.getElementById(section.id);
    if (el && el.offsetTop <= scrollY) {
      this.activeId = section.id;
    }
  }
};
}
