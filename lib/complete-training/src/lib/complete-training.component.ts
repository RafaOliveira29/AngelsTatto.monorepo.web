import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-complete-training',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: 'complete-training.component.html',
  styleUrl: 'complete-training.component.scss',
})
export class CompleteTrainingComponent {
  @Input() text1!: string;
  @Input() text2!: string;
  @Input() imageUrl!: string;
  @Input() discountText!: string;
  @Input() imageBottomUrl!: string;
  @Input() periodBoxText1!: string;
  @Input() periodBoxText2!: string;
  @Input() highlightColor!: string;
  @Input() contentBoxText1!: string;
  @Input() contentBoxText2!: string;
  @Input() highlight: boolean = false;
  @Input() highlightFn!: (text: string, color: string) => string;

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedText(): SafeHtml {
    const highlightedText = this.highlight
      ? this.highlightFn(this.text2, this.highlightColor)
      : this.text2;

    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
