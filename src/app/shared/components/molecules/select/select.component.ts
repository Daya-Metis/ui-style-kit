import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from '@atoms/radio/radio.component';
import { CheckboxComponent } from '@atoms/checkbox/checkbox.component';
import { ArrowComponent } from '@atoms/arrow/arrow.component';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, RadioComponent, CheckboxComponent, ArrowComponent],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  @Input() label = '';
  @Input() options: string[] = [];

  @Input() mode: 'radio' | 'checkbox-single' | 'checkbox-multi' = 'radio';

  @Input() model: string | string[] = '';
  @Output() modelChange = new EventEmitter<string | string[]>();
  open = false;

  toggleOpen() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }
  
  get displayValue(): string {
    if (Array.isArray(this.model)) {
      return this.model.length > 0 ? this.model.join(', ') : '';
    }
    return this.model;
  }
  
  updateCheckboxSingle(value: string | string[]) {
    if (typeof value !== 'string') return;
  
    const current = this.model as string;
    this.modelChange.emit(current === value ? '' : value);
    this.close();
  }
  
  updateCheckboxMulti(value: string | string[]) {
    if (typeof value !== 'string') return;
  
    const current = Array.isArray(this.model) ? this.model : [];
  
    const exists = current.includes(value);
    const updated = exists
      ? current.filter(v => v !== value)
      : [...current, value];
  
    this.modelChange.emit(updated);
  }
  

  updateRadio(value: string) {
    this.modelChange.emit(value);
    this.close();
  }

  isChecked(value: string): boolean {
    return Array.isArray(this.model)
      ? this.model.includes(value)
      : this.model === value;
  }

  get isRadio(): boolean {
    return this.mode === 'radio';
  }
  
  get isCheckboxSingle(): boolean {
    return this.mode === 'checkbox-single';
  }
  
  get isCheckboxMulti(): boolean {
    return this.mode === 'checkbox-multi';
  }
  
  get modelString(): string {
    return this.model as string;
  }
  
  get modelArray(): string[] {
    return this.model as string[];
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: EventTarget | null) {
    if (!target || !this.open) return;

    if (!this.elementRef.nativeElement.contains(target as Node)) {
      this.close();
    }
  }
}
