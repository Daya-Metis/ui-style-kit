import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: { label: string; id: string; icon?: string; closeable?: boolean }[] = [];
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'underline' | 'pill' = 'underline';
  @Input() activeTab: string = '';
  @Output() activeTabChange = new EventEmitter<string>();
  
  @Output() tabChange = new EventEmitter<string>();
  @Output() tabClosed = new EventEmitter<string>();

  selectTab(id: string) {
    this.activeTab = id;
    this.tabChange.emit(id);  
    this.activeTabChange.emit(id);
  }
  
  closeTab(id: string, event: Event) {
    event.stopPropagation();
    this.tabClosed.emit(id);
  }

  onKeydown(event: KeyboardEvent, currentIndex: number) {
    const isVertical = this.orientation === 'vertical';
    const direction = (isVertical ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight']);

    const dirIndex = direction.indexOf(event.key);
    if (dirIndex === -1) return;

    event.preventDefault();

    let nextIndex = currentIndex + (dirIndex === 0 ? -1 : 1);
    if (nextIndex < 0) nextIndex = this.tabs.length - 1;
    if (nextIndex >= this.tabs.length) nextIndex = 0;

    this.selectTab(this.tabs[nextIndex].id);
  }
}
