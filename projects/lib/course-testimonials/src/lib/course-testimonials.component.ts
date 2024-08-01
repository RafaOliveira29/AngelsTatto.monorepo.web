import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-course-testimonials',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: 'course-testimonials.component.html',
  styleUrl: 'course-testimonials.component.scss',
})
export class CourseTestimonialsComponent {
  @Input() title!: string;
  @Input() videos!: string[];
  @Input() vectorUrl!: string;
  @Input() highlightColor!: string;
  @Input() highlight: boolean = false;
  @Input() sanitizedTitleFn!: () => SafeHtml;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  currentVideo: number = 0;

  ngAfterViewInit() {
    this.loadVideo(false);
  }

  prevVideo() {
    if (this.currentVideo > 0) {
      this.currentVideo--;
    } else {
      this.currentVideo = this.videos.length - 1;
    }
    this.loadVideo(false);
  }

  nextVideo() {
    if (this.currentVideo < this.videos.length - 1) {
      this.currentVideo++;
    } else {
      this.currentVideo = 0;
    }
    this.loadVideo(false);
  }

  loadVideo(autoPlay: boolean = true) {
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.src = this.videos[this.currentVideo];
    videoElement.load();
    if (autoPlay) {
      videoElement.play().catch((error) => {
        console.warn(
          'Autoplay foi impedido. O usuário precisa interagir com o documento primeiro.'
        );
      });
    }
  }
}
