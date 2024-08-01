import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-program-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'program-content.component.html',
  styleUrl: 'program-content.component.scss',
})
export class ProgramContentComponent {
  @Input() descriptions!: {
    title: string;
    list: string[];
    finalText?: string;
  }[];
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() highlightColor!: string;
  @Input() highlight: boolean = false;
  @Input() highlightFn!: (text: string, color: string) => string;

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedTitle(): SafeHtml {
    const highlightedText = this.highlight
      ? this.highlightFn(this.title, this.highlightColor)
      : this.title;
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
