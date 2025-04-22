import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ModalComponent } from "@organisms/modal/modal.component";
import { FileUploadComponent } from "@organisms/file-upload/file-upload.component";
import { TabsComponent } from "@organisms/tabs/tabs.component";
import { ToastComponent } from "@organisms/toast/toast.component";
import { ButtonComponent } from "@atoms/button/button.component";
import { UploadDemoComponent } from "../upload-demo/upload-demo.component";

@Component({
  selector: 'app-organisms',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FileUploadComponent,
    UploadDemoComponent,
    ModalComponent,
    TabsComponent, //TODO
    ToastComponent //TODO
  ],
  templateUrl: './organisms.component.html',
  styleUrls: ['./organisms.component.scss']
})
export class OrganismsComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }
}


