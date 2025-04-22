import { Component } from '@angular/core';
import { ButtonComponent } from '@atoms/button/button.component';
import { InputComponent } from '@atoms/input/input.component';
import { ThemeCustomizerComponent } from '@utilities/theme-customizer/theme-customizer.component';
import { ModalComponent } from '@organisms/modal/modal.component';
import { CardComponent } from '@molecules/card/card.component';

@Component({
  selector: 'app-typography-spacing',
  standalone: true,
  imports: [ButtonComponent, InputComponent,CardComponent, ModalComponent, ThemeCustomizerComponent],
  templateUrl: './typography-spacing.component.html',
  styleUrls: ['./typography-spacing.component.scss']
})
export class TypographySpacingComponent {
  showModal = false;

}
