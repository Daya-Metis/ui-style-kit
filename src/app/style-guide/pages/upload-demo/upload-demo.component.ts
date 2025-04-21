import { Component } from '@angular/core';
import { FileUploadComponent } from '@organisms/file-upload/file-upload.component';

@Component({
  selector: 'app-upload-demo',
  standalone: true,
  imports: [FileUploadComponent],
  templateUrl: './upload-demo.component.html',
  styleUrls: ['./upload-demo.component.scss']
})
export class UploadDemoComponent {
  handleFile(file: File | File[] | null) {
    if (Array.isArray(file)) {
      console.log('Multiple:', file);
    } else if (file) {
      console.log('Single:', file.name);
      alert(`Uploaded: ${file?.name}`);
    }
  }
  
}
