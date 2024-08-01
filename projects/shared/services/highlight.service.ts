import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  highlightText(text: string, regex: RegExp, color: string): string {
    return text.replace(regex, `<span style="color: ${color};">$&</span>`);
  }
}
