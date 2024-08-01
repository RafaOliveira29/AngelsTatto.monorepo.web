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
  @Input() sanitizedTextFn!: () => SafeHtml;
}
