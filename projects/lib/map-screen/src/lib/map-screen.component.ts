import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-map-screen',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: 'map-screen.component.html',
  styleUrl: 'map-screen.component.scss',
})
export class MapScreenComponent {
  @Input() title!: string;
  @Input() wppIcon!: string;
  @Input() starIcon!: string;
  @Input() atSignIcon!: string;
  @Input() mapImageUrl!: string;
  @Input() addressText!: string;
  @Input() highlightColor!: string;
  @Input() highlight: boolean = false;
  @Input() sanitizedTextFn!: () => SafeHtml;
}
