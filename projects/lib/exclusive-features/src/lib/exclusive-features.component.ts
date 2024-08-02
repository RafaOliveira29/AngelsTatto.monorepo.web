import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-ExclusiveFeatures',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: 'exclusive-features.component.html',
  styleUrl: 'exclusive-features.component.scss',
})
export class ExclusiveFeaturesComponent {
  @Input() logoUrl!: string;
  @Input() imageUrl!: string;
  @Input() imageWidth!: string;
  @Input() imageHeight!: string;
  @Input() highlightColor!: string;
  @Input() descriptionText!: string;
  @Input() bulletDescriptionText!: string;
  @Input() sanitizedListExclusives!: () => SafeHtml;
  // @Input() sanitizedListExclusives!: SafeHtml[];
}
