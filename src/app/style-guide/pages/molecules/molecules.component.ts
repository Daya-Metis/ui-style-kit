import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CardComponent } from "@molecules/card/card.component";
import { CollapsibleComponent } from "@molecules/collapsible/collapsible.component";
import { SelectComponent } from "@molecules/select/select.component";
import { ContentTableComponent } from "@organisms/content-table/content-table.component";

@Component({
  selector: 'app-molecules',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CollapsibleComponent, //TODO
    SelectComponent,
    ContentTableComponent
  ],
  templateUrl: './molecules.component.html',
  styleUrls: ['./molecules.component.scss']
})
export class MoleculesComponent {
  selectedVariant: string = 'default';
}

