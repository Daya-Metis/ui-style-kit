import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ModalComponent } from "@organisms/modal/modal.component";
import { TabsComponent } from "@organisms/tabs/tabs.component";
import { ToastComponent } from "@organisms/toast/toast.component";
import { ButtonComponent } from "@atoms/button/button.component";
import { UploadDemoComponent } from "../upload-demo/upload-demo.component";
import { ContentTableComponent } from "@organisms/content-table/content-table.component";

@Component({
  selector: 'app-organisms',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    UploadDemoComponent,
    ModalComponent,
    TabsComponent, //TODO
    ToastComponent ,//TODO
    ContentTableComponent
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


