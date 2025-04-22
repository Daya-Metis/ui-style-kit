import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "@atoms/button/button.component";
import { CardComponent } from "@molecules/card/card.component";
import { CollapsibleComponent } from "@molecules/collapsible/collapsible.component";
import { DropdownComponent } from "@molecules/dropdown/dropdown.component";
import { SelectComponent } from "@molecules/select/select.component";

@Component({
  selector: 'app-molecules',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    CollapsibleComponent, //TODO
    DropdownComponent,
    SelectComponent
  ],
  templateUrl: './molecules.component.html',
  styleUrls: ['./molecules.component.scss']
})
export class MoleculesComponent {
  selectedVariant: string = 'default';
}

