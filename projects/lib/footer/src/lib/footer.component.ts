import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: 'footer.component.html',
  styleUrl: 'footer.component.scss',
})
export class FooterComponent {
  @Input() logoUrl!: string;
  @Input() background!: string;
}
