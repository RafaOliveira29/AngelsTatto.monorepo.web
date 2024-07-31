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
  @Input() listExclusives!: string[];
  @Input() highlight: boolean = false;
  @Input() bulletDescriptionText!: string;
  @Input() bulletDescriptionBackground!: string;
  @Input() highlightFn!: (text: string, color: string) => string;

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedListExclusives(): SafeHtml[] {
    return this.listExclusives.map((item) => {
      const highlightedText = this.highlight
        ? this.highlightFn(item, this.highlightColor)
        : item;
      return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
    });
  }
}
