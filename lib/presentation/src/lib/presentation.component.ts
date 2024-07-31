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
  @Input() title!: string;
  @Input() logoUrl!: string;
  @Input() tattoo!: boolean;
  @Input() dermato!: boolean;
  @Input() subTitle!: string;
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
  @Input() highlightFnTitle!: (text: string, color: string) => string;
  @Input() highlightFnSubtitle!: (text: string, color: string) => string;

  @Output() onButtonClick = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedTitle(): SafeHtml {
    const highlightedText = this.highlight
      ? this.highlightFnTitle(this.title, this.highlightColor)
      : this.title;
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }

  get sanitizedSubTitle(): SafeHtml {
    const highlightedText = this.highlight
      ? this.highlightFnSubtitle(this.subTitle, this.highlightColor)
      : this.subTitle;
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }

  handleClick() {
    this.onButtonClick.emit();
  }
}
