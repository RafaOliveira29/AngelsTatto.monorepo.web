import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-presentation',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  @Input() logoUrl!: string;
  @Input() tattoo!: boolean;
  @Input() dermato!: boolean;
  @Input() pirecing!: boolean;
  @Input() textButton!: string;
  @Input() imageWidth!: string;
  @Input() imageHeight!: string;
  @Input() buttonColor!: string;
  @Input() highlightColor!: string;
  @Input() imageLeft: boolean = true;
  @Input() buttonBackground!: string;
  @Input() highlight: boolean = false;
  @Input() isClickable: boolean = true;
  @Input() sanitizedTitleFn!: () => SafeHtml;
  @Input() sanitizedSubtitleFn!: () => SafeHtml;

  @Output() onButtonClick = new EventEmitter();

  handleClick() {
    this.onButtonClick.emit();
  }
}
