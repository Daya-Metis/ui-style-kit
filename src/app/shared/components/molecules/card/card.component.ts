import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ArrowComponent } from "@atoms/arrow/arrow.component";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, ArrowComponent]
})
export class CardComponent {
  @Input() image: string | null = null;
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() link: string | null = null;
}
