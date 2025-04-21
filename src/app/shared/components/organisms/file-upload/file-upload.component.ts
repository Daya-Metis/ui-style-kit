import {
  Component, Input, Output, EventEmitter, ViewChild, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@atoms/button/button.component';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  @Output() fileDropped = new EventEmitter<File | File[] | null>();

  @Input() multiple = false;
  @Input() maxSizeMB: number | null = null;
  @Input() label: string = '';

  dragging = false;
  uploadedFiles: File[] = [];

  onBoxClick() {
    this.fileInput?.nativeElement.click();
  }

  getTotalSize(): number {
    return this.uploadedFiles.reduce((acc, file) => acc + file.size, 0);
  }

  handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;

    const incoming = Array.from(files);
    const combined = this.multiple
      ? [...this.uploadedFiles, ...incoming]
      : [incoming[0]];

    const totalSize = combined.reduce((sum, f) => sum + f.size, 0);
    const maxBytes = (this.maxSizeMB ?? Infinity) * 1024 * 1024;

    if (totalSize > maxBytes) {
      alert(`Total file size exceeds ${this.maxSizeMB}MB`);
      return;
    }

    this.uploadedFiles = combined;
    this.emitUpload();
  }

  emitUpload() {
    this.fileDropped.emit(this.multiple ? this.uploadedFiles : this.uploadedFiles[0] || null);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragging = false;
    this.handleFiles(event.dataTransfer?.files || null);
  }
  

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragging = true;
  }

  onDragLeave() {
    this.dragging = false;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.handleFiles(input.files);
    if (input) input.value = ''; // ✅ allow re-selecting same file again
  }

  clearFile(index?: number) {
    if (typeof index === 'number') {
      this.uploadedFiles.splice(index, 1);
    } else {
      this.uploadedFiles = [];
    }

    this.emitUpload();
  }
}
