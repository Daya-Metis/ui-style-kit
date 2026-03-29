import { CommonModule } from "@angular/common";
import { ModalComponent } from "@organisms/modal/modal.component";
import { TabsComponent } from "@organisms/tabs/tabs.component";
import { ToastComponent } from "@organisms/toast/toast.component";
import { ButtonComponent } from "@atoms/button/button.component";
import { UploadDemoComponent } from "../upload-demo/upload-demo.component";
import { ContentTableComponent } from "@organisms/content-table/content-table.component";
import { PlaygroundComponent } from "app/shared/utilities/playground/playground.component";
import { SelectComponent } from "@molecules/select/select.component";
import { SwitchComponent } from "@atoms/switch/switch.component";
import { Component } from "@angular/core";

@Component({
  selector: 'app-organisms',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    UploadDemoComponent,
    ModalComponent,
    SelectComponent,
    SwitchComponent,
    TabsComponent,
    ToastComponent ,//TODO
    ContentTableComponent,
    PlaygroundComponent
  ],
  templateUrl: './organisms.component.html',
  styleUrls: ['./organisms.component.scss']
})
export class OrganismsComponent {
  showModal = false;
  showToast = true;
  toastVariant: 'info' | 'success' | 'warning' | 'error' = 'success';

  openModal() {
    this.showModal = true;
  }

  activeTab = 'overview';

  tabOptions = [
    { id: 'overview', label: 'Overview', icon: '📄' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'help', label: 'Help' }
  ];
  
  variant: 'underline' | 'pill' = 'underline';
  orientation: 'horizontal' | 'vertical' = 'horizontal';
  size: 'sm' | 'md' | 'lg' = 'md';
  toPillVariant = false;
  toVertical = false
  
  get tabMarkup(): string {
    return `<app-tabs
      [tabs]="..."
      activeTab="${this.activeTab}"
      orientation="${this.orientation}"
      variant="${this.variant}"
      size="${this.size}">
    </app-tabs>`;
  }

  handleTabClose(closedId: string) {
    this.tabOptions = this.tabOptions.filter(tab => tab.id !== closedId);
  
    if (this.activeTab === closedId && this.tabOptions.length > 0) {
      this.activeTab = this.tabOptions[0].id;
    }
  }

  updateVariantFromToggle(checked: boolean) {
    this.toPillVariant = checked;
    this.variant = checked ? 'pill' : 'underline';
  }

  updateOrientationFromToggle(checked: boolean) {
    this.toVertical = checked;
    this.orientation = checked ? 'vertical' : 'horizontal';
  }

  reopenToast() {
    this.showToast = true;
  }
}
